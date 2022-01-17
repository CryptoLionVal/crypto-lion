import { coins, Secp256k1HdWallet, StdFee } from '@cosmjs/launchpad'
import { stringToPath } from '@cosmjs/crypto'
import {
  GasPrice,
  SigningStargateClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate'
import { AccountData } from '@cosmjs/proto-signing'
import { BroadcastTxResponse } from '@cosmjs/stargate/build/stargateclient'
import NetworksConfig from '@/networks.config'
import { Network } from '@/interfaces/Network'

class Chain {
  _chain: string
  _networks: Network
  gasPrice: GasPrice
  gasLimits: object
  _account: AccountData | null
  _memo: string

  constructor(chain: string, networks: Network = NetworksConfig) {
    this._chain = chain
    this._networks = networks
    this.gasPrice = GasPrice.fromString('1base' + networks[chain].PREFIX)
    this.gasLimits = { send: 160000 }
    this._account = null
    this._memo = 'Tx created via https://cryptolion.finance wallet.'
  }

  get account() {
    return this._account
  }

  set account(account: AccountData | null) {
    this._account = account
  }

  public config(key: string, network = ''): string {
    if (network.length) return this._networks[network][key]

    return this._networks[this._chain][key]
  }

  async client(
    encrypted: string,
    pin: string
  ): Promise<SigningStargateClient | undefined> {
    if (this.account) {
      const wallet = await this.decryptWallet(encrypted, pin)

      return await SigningStargateClient.connectWithSigner(
        this.config('RPC'),
        wallet,
        {
          gasLimits: this.gasLimits,
          gasPrice: this.gasPrice,
        } as SigningStargateClientOptions
      )
    }
  }

  async init(mnemonic: string = '', pin: string = ''): Promise<string | null> {
    if (
      sessionStorage.getItem('lion_encrypted_wallet') &&
      sessionStorage.getItem('lion_account_address')
    ) {
      this.account = JSON.parse(
        sessionStorage.getItem('lion_account_address') as string
      )

      return sessionStorage.getItem('lion_encrypted_wallet')
    }

    const path = stringToPath(this.config('HD_PATH'))

    const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
      hdPaths: [path],
      prefix: this.config('PREFIX'),
    })

    const accounts = await wallet.getAccounts()
    this.account = (accounts as AccountData[]).shift() as AccountData
    sessionStorage.setItem('lion_account_address', JSON.stringify(this.account))

    const serialized = await wallet.serialize(pin)
    sessionStorage.setItem('lion_encrypted_wallet', serialized)

    return serialized
  }

  async decryptWallet(
    serialized: string,
    pin: string
  ): Promise<Secp256k1HdWallet> {
    return await Secp256k1HdWallet.deserialize(serialized, pin)
  }

  async delegate(
    transferAmount: number = 0,
    encrypted: string,
    pin: string,
    memo: string | null = null
  ): Promise<BroadcastTxResponse> {
    const amount = coins(transferAmount, 'base' + this.config('PREFIX'))

    const client = (await this.client(encrypted, pin)) as SigningStargateClient

    const fee: StdFee = {
      amount,
      gas: '89000000',
    }

    return await client.delegateTokens(
      this.account ? this.account.address : '',
      this.config('VALIDATOR'),
      amount[0],
      fee,
      memo ?? this._memo
    )
  }

  async withdraw(
    encrypted: string,
    pin: string,
    memo: string | null = null
  ): Promise<BroadcastTxResponse> {
    const client = (await this.client(encrypted, pin)) as SigningStargateClient

    const fee: StdFee = {
      amount: coins('0', 'base' + this.config('PREFIX')),
      gas: '89000000',
    }

    return await client.withdrawRewards(
      this.account ? this.account.address : '',
      this.config('VALIDATOR'),
      fee,
      memo ?? this._memo
    )
  }
}

export default Chain
