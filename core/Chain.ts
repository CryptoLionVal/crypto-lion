import { Secp256k1HdWallet } from '@cosmjs/launchpad'
import { stringToPath } from '@cosmjs/crypto'
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate'
import { coin } from '@cosmjs/proto-signing'
import NetworksConfig from '@/chains.config'
import { Chain as ChainType } from '@/interfaces/Chain'

export default class Chain {
  _chain: string
  _networks: Network

  constructor(chain, networks = NetworksConfig) {
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

  set account(account) {
    this._account = account
  }

  config(key, network = null) {
    if (network) return this._networks[network][key]

    return this._networks[this._chain][key]
  }

  async client(encrypted, pin) {
    if (this.account) {
      const wallet = await this.decryptWallet(encrypted, pin)

      return await SigningStargateClient.connectWithSigner(
        this.config('RPC'),
        wallet,
        {
          gasLimits: this.gasLimits,
          gasPrice: this.gasPrice,
        }
      )
    }
  }

  async init(mnemonic = '', pin = '') {
    if (
      sessionStorage.getItem('lion_encrypted_wallet') &&
      sessionStorage.getItem('lion_account_address')
    ) {
      this.account = JSON.parse(sessionStorage.getItem('lion_account_address'))

      return sessionStorage.getItem('lion_encrypted_wallet')
    }

    const path = stringToPath(this.config('HD_PATH'))

    const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
      hdPaths: [path],
      prefix: this.config('PREFIX'),
    })

    this.account = (await wallet.getAccounts()).shift()
    sessionStorage.setItem('lion_account_address', JSON.stringify(this.account))

    const seriialized = await wallet.serialize(pin)
    sessionStorage.setItem('lion_encrypted_wallet', seriialized)

    return seriialized
  }

  async decryptWallet(serialized, pin) {
    return await Secp256k1HdWallet.deserialize(serialized, pin)
  }

  async delegate(transferAmount = 0, encrypted, pin, memo = null) {
    const amount = coin(transferAmount, 'base' + this.config('PREFIX'))

    const client = await this.client(encrypted, pin)

    return await client.delegateTokens(
      this.account.address,
      this.config('VALIDATOR'),
      amount,
      memo ?? this._memo
    )
  }

  async withdraw(encrypted, pin, memo = null) {
    const client = await this.client(encrypted, pin)

    return await client.withdrawRewards(
      this.account.address,
      this.config('VALIDATOR'),
      memo ?? this._memo
    )
  }
}
