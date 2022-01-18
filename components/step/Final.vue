<template>
  <transition name="fade">
    <div
      v-if="walletStep === 'final'"
      class="container px-8 flex flex-col w-full flex-wrap justify-start items-start text-left"
    >
      <h1 class="my-10 text-5xl w-full font-bold text-green-700 leading-tight">
        {{ $t('pages.how_to_stake_cro.steps.final.title') }}
      </h1>
      <h3 class="mb-4">
        {{ $t('pages.how_to_stake_cro.steps.final.desc') }}
      </h3>

      <div class="w-full pt-6 pb-6 flex flex-row">
        <a
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          href="https://twitter.com/CryptoLionVal"
          :title="$t('pages.how_to_stake_cro.steps.final.buttons.twitter')"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>

          <span class="text-l md:text-3xl">
            {{ $t('pages.how_to_stake_cro.steps.final.buttons.twitter') }}
          </span>
        </a>
        <a
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          href="https://t.me/CryptoLionValidator"
          :title="$t('pages.how_to_stake_cro.steps.final.buttons.telegram')"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              id="telegram-1"
              d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
            />
          </svg>

          <span class="text-l md:text-3xl">
            {{ $t('pages.how_to_stake_cro.steps.final.buttons.telegram') }}
          </span>
        </a>
      </div>

      <a
        :href="$chain.config('EXPLORER') + '/tx/' + walletLastHash"
        target="_blank"
        class="text-gray-500 text-xxs mx-4 md:mx-0 font-bold md:m-8 break-all underline"
        >TX: {{ walletLastHash }}</a
      >

      <div class="flex w-full justify-start">
        <a
          class="rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-1/5 p-1 mt-6 bg-white mr-2 mb-32 text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out"
          @click.prevent="set({ name: 'step', value: 'wallet' })"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-800 fill-current"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              class="heroicon-ui"
              d="M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z"
            />
          </svg>
          <span class="text-xl">
            {{ $t('pages.how_to_stake_cro.back_button') }}
          </span>
        </a>

        <button-logout />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
export default class Wallet extends Vue {
  @store.Getter
  public walletStep!: string

  @store.Getter
  public walletLastHash!: string

  @store.Mutation
  public set!: (data: object) => void
}
</script>
