import { ActionTree, MutationTree } from 'vuex'
import { AxiosRequestConfig } from 'axios'
import Big from 'big.js'
import { Sha256 } from '@cosmjs/crypto'

// TODO: Implement ts for state component calls

export const state = () =>
  ({
    dialog: {
      show: false as boolean,
      type: 'warning' as string,
      message: '' as string,
    } as object,
    step: 'first' as string,
    pin: '' as string,
    confirmed: null as null | void,
    saved: null as null | void,
    encryptedWallet: null,
    balance: 0 as number,
    rewards: 0 as number,
    staked: 0 as number,
    lastHash: '' as string,
  } as { [key: string]: any })

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  set: (state: RootState, { name, value }): void => {
    state[name] = value
  },
  dialog: (state: RootState, { name, value }): void => {
    state.dialog[name] = value
  },
  showDialog(state: RootState): void {
    state.dialog.show = true
  },
  hideDialog(state: RootState): void {
    state.dialog.show = false
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async init({ commit, state, dispatch }, mnemonic): Promise<void> {
    // @ts-ignore
    const encryptedWallet = await this.$chain.init(mnemonic, state.pin)

    commit('set', {
      name: 'encryptedWallet',
      value: encryptedWallet,
    })

    await dispatch('fetchBalances')
  },

  async fetchBalances({ commit }): Promise<void> {
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
      commit('set', {
        name: 'rewards',
        value: parseInt(rewards) > 0 ? rewards : 0,
      })
    }

    if (account.result.bondedBalance.length) {
      const staked = new Big(account.result.bondedBalance[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'staked',
        value: parseInt(staked) > 0 ? staked : 0,
      })
    }

    if (account.result.balance.length) {
      const balance = new Big(account.result.balance[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'balance',
        value: parseInt(balance) > 0 ? balance : 0,
      })
    }
  },

  async stake({ commit, state, dispatch }, amount: number): Promise<void> {
    // @ts-ignore
    const response = await this.$chain.delegate(
      amount * 100000000,
      state.encryptedWallet,
      state.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    commit('set', {
      name: 'lastHash',
      value: response.transactionHash,
    })

    await dispatch('fetchBalances')
  },

  async withdraw({ state, dispatch }): Promise<void> {
    // @ts-ignore
    const response = await this.$chain.withdraw(
      state.encryptedWallet,
      state.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    await dispatch('fetchBalances')
  },

  resetStore({ commit }): void {
    commit('set', {
      name: 'step',
      value: 'first',
    })
    commit('set', {
      name: 'encryptedWallet',
      value: null,
    })
    commit('set', {
      name: 'balance',
      value: 0,
    })
    commit('set', {
      name: 'lastHash',
      value: '',
    })
    commit('set', {
      name: 'pin',
      value: '',
    })
    commit('set', {
      name: 'confirmed',
      value: null,
    })
    commit('set', {
      name: 'saved',
      value: null,
    })
  },

  confirmPass({ commit }): Promise<void> {
    return new Promise((resolve) => {
      commit('set', {
        name: 'confirmed',
        value: resolve,
      })
    })
  },

  savePass({ commit }): Promise<void> {
    return new Promise((resolve) => {
      commit('set', {
        name: 'saved',
        value: resolve,
      })
    })
  },

  savePin({ commit, state }, pin: string): void {
    const protectedPin = new Sha256(Uint8Array.from(pin as Iterable<number>))

    commit('set', { name: 'pin', value: protectedPin.digest().toString() })
    sessionStorage.setItem('lion_encrypted_pin', state.pin)
  },

  warningDialog({ commit }, message: string): void {
    commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'warning',
        message,
      },
    })
  },

  passwordDialog({ commit }, message: string): void {
    commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'password',
        message,
      },
    })
  },

  confirmDialog({ commit }, message: string): void {
    commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'confirm',
        message,
      },
    })
  },

  resetDialog({ commit }): void {
    commit('set', {
      name: 'dialog',
      value: {
        show: false,
        type: 'warning',
        message: '',
      },
    })
  },
}
