import Big from 'big.js'
import { Sha256 } from '@cosmjs/crypto'

// TODO: Implement ts for state component calls

export const state = () => ({
  dialog: {
    show: false,
    type: 'warning',
    message: '',
  },
  step: 'first',
  pin: '',
  confirmed: null,
  saved: null,
  encryptedWallet: null,
  balance: 0,
  rewards: 0,
  staked: 0,
  lastHash: '',
})

// TODO: refactor
export const mutations = {
  set: (state, { name, value }) => {
    state[name] = value
  },
  dialog: (state, { name, value }) => {
    state.dialog[name] = value
  },
  showDialog(state) {
    state.dialog.show = true
  },
  hideDialog(state) {
    state.dialog.show = false
  },
}

export const actions = {
  async init({ commit, state, dispatch }, mnemonic) {
    const encryptedWallet = await this.$chain.init(mnemonic, state.pin)

    commit('set', {
      name: 'encryptedWallet',
      value: encryptedWallet,
    })

    await dispatch('fetchBalances')
  },

  async fetchBalances({ commit }) {
    const account = await this.$axios.$get(
      this.$chain.config('EXPLORER_API') +
        '/accounts/' +
        this.$chain.account.address,
      { crossdomain: true }
    )

    if (account.result.totalRewards.length) {
      const rewards = new Big(account.result.totalRewards[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'rewards',
        value: rewards > 0 ? rewards : 0,
      })
    }

    if (account.result.bondedBalance.length) {
      const staked = new Big(account.result.bondedBalance[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'staked',
        value: staked > 0 ? staked : 0,
      })
    }

    if (account.result.balance.length) {
      const balance = new Big(account.result.balance[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'balance',
        value: balance > 0 ? balance : 0,
      })
    }
  },

  async stake({ commit, state, dispatch }, amount) {
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

  async withdraw({ state, dispatch }) {
    const response = await this.$chain.withdraw(
      state.encryptedWallet,
      state.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    await dispatch('fetchBalances')
  },

  resetStore({ commit }) {
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

  confirmPass({ commit }) {
    return new Promise((resolve) => {
      commit('set', {
        name: 'confirmed',
        value: resolve,
      })
    })
  },

  savePass({ commit }) {
    return new Promise((resolve) => {
      commit('set', {
        name: 'saved',
        value: resolve,
      })
    })
  },

  savePin({ commit, state }, pin) {
    const protectedPin = new Sha256(pin)

    commit('set', { name: 'pin', value: protectedPin.digest().toString() })
    sessionStorage.setItem('lion_encrypted_pin', state.pin)
  },

  warningDialog({ commit }, message) {
    commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'warning',
        message,
      },
    })
  },

  passwordDialog({ commit }, message) {
    commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'password',
        message,
      },
    })
  },

  confirmDialog({ commit }, message) {
    commit('set', {
      name: 'dialog',
      value: {
        show: true,
        type: 'confirm',
        message,
      },
    })
  },

  resetDialog({ commit }) {
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
