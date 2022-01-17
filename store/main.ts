import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { AxiosRequestConfig } from 'axios'
import Big from 'big.js'
import { Sha256 } from '@cosmjs/crypto'

interface Dialog {
  show: boolean
  type: string
  message: string
}

interface Setter {
  name: string
  value: any
}

@Module({
  name: 'main',
  stateFactory: true,
  namespaced: true,
})
export default class Main extends VuexModule {
  public dialog: Dialog = {
    show: false,
    type: 'warning',
    message: '',
  }

  public step: string = 'first'
  public pin: string = ''
  public confirmed: null | boolean | Function = null
  public saved: null | boolean | Function = null
  public encryptedWallet: null | string = null
  public balance: number = 0
  public rewards: number = 0
  public staked: number = 0
  public lastHash: string = ''

  get dialogType(): string {
    return this.dialog.type
  }

  get dialogPin(): string {
    return this.pin
  }

  get dialogVisible(): boolean {
    return this.dialog.show
  }

  get dialogSaved(): null | boolean | Function {
    return this.saved
  }

  get dialogConfirmed(): null | boolean | Function {
    return this.confirmed
  }

  // get step():string { return this.step }
  // get encryptedWallet():null | string { return this.encryptedWallet }
  // get balance(): number { return this.balance }

  get walletBalance(): number {
    return this.balance
  }

  get walletRewards(): number {
    return this.rewards
  }

  get walletStaked(): number {
    return this.staked
  }

  @Mutation
  public set({ name, value }: Setter): void {
    // @ts-ignore
    this[name] = value
  }

  // @Mutation
  // public dialog({ name, value }: Setter): void {
  //   this.dialog[name] = value
  // }

  @Mutation
  public showDialog(): void {
    this.dialog.show = true
  }

  @Mutation
  public hideDialog(): void {
    this.dialog.show = false
  }

  @Action
  public async init(mnemonic: string): Promise<void> {
    // @ts-ignore
    const encryptedWallet = await this.$chain.init(mnemonic, this.pin)

    this.context.commit('set', {
      name: 'encryptedWallet',
      value: encryptedWallet,
    })

    await this.context.dispatch('fetchBalances')
  }

  @Action
  public async fetchBalances(): Promise<void> {
    // @ts-ignore
    const account = await this.$axios.$get(
      // @ts-ignore
      this.$chain.config('EXPLORER_API') +
        '/accounts/' +
        // @ts-ignore
        this.$chain.account.address,
      { crossdomain: true } as AxiosRequestConfig
    )

    if (account.result.totalRewards.length) {
      const rewards = new Big(account.result.totalRewards[0].amount)
        .div(100000000)
        .toPrecision(5)
      this.context.commit('set', {
        name: 'rewards',
        value: parseInt(rewards) > 0 ? rewards : 0,
      })
    }

    if (account.result.bondedBalance.length) {
      const staked = new Big(account.result.bondedBalance[0].amount)
        .div(100000000)
        .toPrecision(5)
      this.context.commit('set', {
        name: 'staked',
        value: parseInt(staked) > 0 ? staked : 0,
      })
    }

    if (account.result.balance.length) {
      const balance = new Big(account.result.balance[0].amount)
        .div(100000000)
        .toPrecision(5)
      this.context.commit('set', {
        name: 'balance',
        value: parseInt(balance) > 0 ? balance : 0,
      })
    }
  }

  @Action
  public async stake(amount: number): Promise<void> {
    // @ts-ignore
    const response = await this.$chain.delegate(
      amount * 100000000,
      this.encryptedWallet,
      this.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    this.context.commit('set', {
      name: 'lastHash',
      value: response.transactionHash,
    })

    await this.context.dispatch('fetchBalances')
  }

  @Action
  public async withdraw(): Promise<void> {
    // @ts-ignore
    const response = await this.$chain.withdraw(this.encryptedWallet, this.pin)

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    await this.context.dispatch('fetchBalances')
  }

  @Action
  public resetStore(): void {
    this.context.commit('set', {
      name: 'step',
      value: 'first',
    })
    this.context.commit('set', {
      name: 'encryptedWallet',
      value: null,
    })
    this.context.commit('set', {
      name: 'balance',
      value: 0,
    })
    this.context.commit('set', {
      name: 'lastHash',
      value: '',
    })
    this.context.commit('set', {
      name: 'pin',
      value: '',
    })
    this.context.commit('set', {
      name: 'confirmed',
      value: null,
    })
    this.context.commit('set', {
      name: 'saved',
      value: null,
    })
  }

  @Action
  public confirmPass(): Promise<void> {
    return new Promise((resolve) => {
      this.context.commit('set', {
        name: 'confirmed',
        value: resolve,
      })
    })
  }

  @Action
  public savePass(): Promise<void> {
    return new Promise((resolve) => {
      this.context.commit('set', {
        name: 'saved',
        value: resolve,
      })
    })
  }

  @Action
  public savePin(pin: string): void {
    const protectedPin = new Sha256(Uint8Array.from(pin as Iterable<number>))

    this.context.commit('set', {
      name: 'pin',
      value: protectedPin.digest().toString(),
    })
    this.context.commit('set', { name: 'saved', value: true })
    sessionStorage.setItem('lion_encrypted_pin', this.pin)
  }

  @Action
  public warningDialog(message: string): void {
    this.context.commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'warning',
        message,
      },
    })
  }

  @Action
  public passwordDialog(message: string): void {
    this.context.commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'password',
        message,
      },
    })
  }

  @Action
  public confirmDialog(message: string): void {
    this.context.commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'confirm',
        message,
      },
    })
  }

  @Action
  public resetDialog(): void {
    this.context.commit('set', {
      name: 'dialog',
      value: {
        show: false,
        type: 'warning',
        message: '',
      },
    })
  }
}
