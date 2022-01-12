<template>
  <button
    v-if="!hidden"
    type="button"
    :title="$t('navbar.rate.title')"
    class="inline-flex items-center px-4 py-2 text-sm leading-6 font-bold rounded-full text-green-500 bg-transparent focus:outline-none transition ease-in-out duration-150"
    @click="refresh"
  >
    <span
      :class="{ 'animate-ping': loading, 'animate-pulse': !loading }"
      class="inline-flex rounded-full h-2 w-2 bg-green-500 mr-2"
    ></span
    >{{ rate }}% p.a. | {{ commission }}% {{ $t('navbar.rate.fee') }}
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AxiosRequestConfig } from 'axios'
import Big from 'big.js'
import CHAINS from '~/chains.config'

const CHAIN: string = process.env.CHAIN as string

@Component
export default class Rate extends Vue {
  ap: number = 1
  delegated: number = 1
  commission: number = 0
  loading: boolean = true
  hidden: boolean = true

  get rate(): string {
    return new Big((this.ap / this.delegated) * 100).toPrecision(4)
  }

  async refresh(): Promise<void> {
    this.loading = true

    const ap = await this.$axios.$get(
      CHAINS[CHAIN].LCD + '/cosmos/mint/v1beta1/annual_provisions'
    )
    this.ap = parseInt(ap.annual_provisions)

    const delegated = await this.$axios.$get(
      CHAINS[CHAIN].EXPLORER_API + '/status',
      { crossdomain: true } as AxiosRequestConfig
    )
    this.delegated = parseInt(delegated.result.totalDelegated[0].amount)

    const commission = await this.$axios.$get(
      CHAINS[CHAIN].EXPLORER_API + '/validators/' + CHAINS[CHAIN].VALIDATOR,
      { crossdomain: true } as AxiosRequestConfig
    )
    this.commission = parseInt(commission.result.commissionRate) * 100

    this.loading = false
  }

  async mounted(): Promise<void> {
    await this.refresh()

    this.hidden = false
  }
}
</script>
