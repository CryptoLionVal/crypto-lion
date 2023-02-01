<template>
  <transition name="fade">
    <div
      v-if="walletStep === 'first'"
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-center md:text-left"
      >
        <h1 class="my-16 text-5xl font-bold leading-tight">
          {{ $t('pages.how_to_stake_cro.steps.first.title') }}
        </h1>
        <p class="leading-normal text-2xl mb-8">
          {{ $t('pages.how_to_stake_cro.steps.first.desc') }}
        </p>
      </div>
      <div class="w-full pt-6 pb-32 flex flex-col">
        <button
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="set({ name: 'step', value: 'defi' })"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              class="heroicon-ui"
              d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 2v16h8V4H8zm4 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>

          <span class="text-l md:text-3xl">
            {{ $t('pages.how_to_stake_cro.steps.first.buttons.defi') }}
          </span>
        </button>
        <a
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          href="https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />

          </svg>

          <span class="text-l md:text-3xl">
            {{ $t('pages.how_to_stake_cro.steps.first.buttons.mnemonic') }}
          </span>
        </a>
        <button
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="navigate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              class="heroicon-ui"
              d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
            />
          </svg>
          <span class="text-l md:text-3xl">
            {{ $t('pages.how_to_stake_cro.steps.first.buttons.desktop') }}
          </span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
export default class First extends Vue {
  @store.Getter
  public walletStep!: string

  @store.Mutation
  public set!: (data: object) => void

  navigate() {
    this.set({ name: 'step', value: 'desktop' })
    this.$router.push(
      this.localePath('how-to-stake-cro') +
        '#' +
        this.$t('pages.how_to_stake_cro.steps_id')
    )
  }
}
</script>
