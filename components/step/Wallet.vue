<template>
  <transition name="fade">
    <div
      v-if="step === 'wallet'"
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-left md:text-left"
      >
        <h1 class="my-6 text-5xl leading-tight flex flex-row items-center">
          <span class="font-bold">
            {{ $t('pages.how_to_stake_cro.steps.wallet.title') }}
          </span>
        </h1>
        <div class="my-6 flex text-xs md:text-3xl justify-between space-x-2">
          <div
            class="leading-tight flex flex-col justify-between space-y-2 items-start"
          >
            <span class="font-bold">
              <input
                ref="address"
                :value="$chain.account.address"
                readonly
                type="text"
                size="35"
                class="bg-white opacity-75 py-1 focus:outline-none px-2 md:px3 text-gray-800 md:text-base text-xs rounded-full"
              />
            </span>
            <span class="font-bold">{{
              $t('pages.how_to_stake_cro.steps.wallet.staked_balance')
            }}</span>
            <span class="font-bold">{{
              $t('pages.how_to_stake_cro.steps.wallet.available_balance')
            }}</span>
            <span class="font-bold">
              {{ $t('pages.how_to_stake_cro.steps.wallet.rewards') }}
            </span>
          </div>
          <div
            class="leading-tight flex flex-col justify-between space-y-2 items-start"
          >
            <span class="flex items-center">
              &nbsp;
              <button
                class="cursor-pointer mt-1"
                :title="
                  $t('pages.how_to_stake_cro.steps.wallet.renew_button_title')
                "
                :class="{
                  'text-teal-300': !loading,
                  'text-gray-300': loading,
                }"
                :disabled="loading"
                @click="copy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  ></path>
                </svg>
              </button>
            </span>
            <span class="ml-1 flex items-center">
              {{ staked }}
            </span>
            <span class="ml-1 flex items-center">
              {{ balance }}
              <button
                class="cursor-pointer"
                :title="
                  $t('pages.how_to_stake_cro.steps.wallet.renew_button_title')
                "
                :class="{
                  'animate-spin': loading && reloadingBalance,
                  'cursor-not-allowed': loading || reloadingBalance,
                  'text-teal-300': !loading,
                  'text-gray-300': loading,
                }"
                :disabled="loading || reloadingBalance"
                @click="reloadBalance"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2 mr-3"
                >
                  <path d="M23 4v6h-6M1 20v-6h6" />
                  <path
                    d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
                  />
                </svg>
              </button>
            </span>
            <span class="ml-1 flex items-center">
              {{ rewards }}
              <button
                class="cursor-pointer text-xs flex flex-row items-center"
                :disabled="loading || withdrawingRewards || reloadingBalance"
                :title="
                  $t('pages.how_to_stake_cro.steps.wallet.rewards_button_title')
                "
                :class="{
                  'animate-pulse': loading && withdrawingRewards,
                  'cursor-not-allowed':
                    loading || withdrawingRewards || reloadingBalance,
                  'text-teal-300': !loading,
                  'text-gray-300': loading,
                }"
                @click="withdrawRewards"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2 mr-3"
                >
                  <path
                    d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full pt-1 pb-3 flex flex-col md:flex-row">
        <input
          v-model="amount"
          :disabled="loading"
          type="number"
          min="0"
          step="0.01"
          pattern="[0-9]+([\.][0-9]+)?"
          :max="parseFloat(walletBalance).toFixed(2)"
          class="rounded-full w-full md:w-2/6 h-16 px-12 mb-3 font-extrabold text-xl py-4 text-primary normal-case focus:outline-none"
        />
        <button
          :disabled="!validAmount"
          :class="{
            'cursor-not-allowed': !validAmount,
            'transform-none': !validAmount,
            'hover:bg-green-400': !validAmount,
            'opacity-50': !validAmount,
            'bg-teal-300': !loading,
            'bg-gray-300': loading,
          }"
          class="rounded-full flex flex-row h-16 justify-center w-full md:w-1/6 inline-block hover:bg-teal-400 p-4 md:mx-6 text-primary font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="stakeNow"
        >
          <svg
            v-if="!loading || reloadingBalance || withdrawingRewards"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary fill-current"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
            />
          </svg>
          <svg
            v-else
            class="animate-spin -ml-1 mr-3 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-2xl">{{
            $t('pages.how_to_stake_cro.steps.wallet.button')
          }}</span>
        </button>
      </div>

      <a
        :href="explorerLink"
        target="_blank"
        class="underline hover:no-underline text-gray-200 hover:text-gray-200 mb-2"
        :title="$t('pages.how_to_stake_cro.steps.wallet.explorer')"
        >{{ $t('pages.how_to_stake_cro.steps.wallet.explorer') }}</a
      >

      <disclaimer />

      <button-logout />
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
export default class Wallet extends Vue {
  // TODO: Must specify the exact type.
  $chain: any

  amount: number = 0
  copied: boolean = false
  loading: boolean = false
  reloadingBalance: boolean = false
  withdrawingRewards: boolean = false

  @store.Getter
  public walletStaked!: number

  @store.Getter
  public walletBalance!: number

  @store.Getter
  public walletRewards!: number

  @store.Getter
  public step!: string

  @store.Mutation
  public set!: (data: object) => void

  @store.Action
  public fetchBalances!: (data: void) => Promise<void>

  @store.Action
  public withdraw!: (data: void) => Promise<void>

  @store.Action
  public stake!: (data: number) => Promise<void>

  @store.Action
  public confirmPass!: (data: void) => Promise<void | Function>

  @store.Action
  public confirmDialog!: (data: string) => void

  @store.Action
  public warningDialog!: (data: string) => void

  get validAmount(): boolean {
    return (
      /^([0-9]*(\.[0-9]{1,2})?)$/.test(this.amount + '') &&
      this.amount > 0 &&
      this.amount <= parseFloat(this.walletBalance + '') &&
      !this.loading
    )
  }

  get staked(): string {
    return this.walletStaked + ' ' + this.$chain.config('PREFIX').toUpperCase()
  }

  get balance(): string {
    return this.walletBalance + ' ' + this.$chain.config('PREFIX').toUpperCase()
  }

  get rewards(): string {
    return this.walletRewards + ' ' + this.$chain.config('PREFIX').toUpperCase()
  }

  get explorerLink(): string {
    return (
      this.$chain.config('EXPLORER') + '/account/' + this.$chain.account.address
    )
  }

  async stakeNow(): Promise<void> {
    if (this.loading) return

    this.loading = true

    this.confirmDialog(this.$t('dialog.messages.unlock') as string)

    const confirmed = await this.confirmPass()
    if (!confirmed) {
      this.warningDialog(this.$t('dialog.messages.wrong') as string)

      this.loading = false
      return
    }

    try {
      await this.stake(this.amount)

      this.set({ name: 'step', value: 'final' })
    } catch (error: any) {
      this.warningDialog(error.message)
    }

    this.loading = false
  }

  async withdrawRewards(): Promise<void> {
    if (this.withdrawingRewards) return

    this.loading = true
    this.withdrawingRewards = true

    this.confirmDialog(this.$t('dialog.messages.unlock') as string)

    const confirmed = await this.confirmPass()
    if (!confirmed) {
      this.warningDialog(this.$t('dialog.messages.wrong') as string)

      this.loading = false
      this.withdrawingRewards = false
      return
    }

    try {
      await this.withdraw()
    } catch (error: any) {
      this.warningDialog(error.message)
    }

    this.loading = false
    this.withdrawingRewards = false
  }

  async reloadBalance(): Promise<void> {
    if (this.reloadingBalance) return

    this.loading = true
    this.reloadingBalance = true

    try {
      await this.fetchBalances()
    } catch (error: any) {
      this.warningDialog(error.message)
    }

    this.loading = false
    this.reloadingBalance = false
  }

  copy(): void {
    const textArea: HTMLTextAreaElement = this.$refs
      .address as HTMLTextAreaElement
    textArea.focus()
    textArea.select()

    try {
      document.execCommand('copy')

      this.copied = true

      setTimeout(() => (this.copied = false), 1000)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Oops, unable to copy')
    }
  }

  mounted(): void {
    setInterval(async () => {
      if (!this.loading && !this.reloadingBalance && this.step === 'wallet') {
        this.reloadingBalance = true
        await this.fetchBalances()
        this.reloadingBalance = false
      }
    }, 10000)
  }
}
</script>
