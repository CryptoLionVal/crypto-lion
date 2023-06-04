<template>
  <div>
    <section
      class="bg-gradient-to-b from-white to-blue-200 flex w-full h-screen hero-section"
    >
      <div
        class="w-1/2 h-full left text-theme-primary py-16 grid grid-cols-1 place-items-center"
      >
        <div class="text-left relative w-9/12">
          <div
            class="banner-price absolute bg-gradient-to-b p-4 from-theme-primary to-theme-secondary text-white"
          >
            <p class="mb-0 pt-1">Up to</p>
            <span class="text-xl font-bold"
              >15%<sup class="text-sm">P.A.</sup></span
            >
          </div>
          <h2 class="text-5xl leading-tight">Staking Cryptocurrencies</h2>
          <h3 class="text-5xl leading-tight">No skills?</h3>
          <h4 class="text-6xl font-semibold leading-tight text-theme-secondary">
            No Problem!
          </h4>
          <ul>
            <li class="leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 float-left text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                />
              </svg>
              Secure & reliable info-structure
            </li>
            <li class="leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 float-left text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                />
              </svg>
              Hundreds of customers
            </li>
            <li class="leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 float-left text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                />
              </svg>
              Several blockchains
            </li>
            <li class="leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 float-left text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                />
              </svg>
              Community driven
            </li>
          </ul>
          <div class="mt-3 grid grid-cols-4">
            <a
              :title="$t('stake_now.title')"
              class="mx-auto lg:mx-0 font-bold bg-gradient-to-b from-theme-primary to-theme-secondary text-white rounded-full my-2 w-min whitespace-nowrap py-2 text-center px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex flex-row items-center text-sm"
              href="https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
              target="_blank"
            >
              {{ $t('stake_now.name') }}
            </a>
            <div class="ml-2">
              <NuxtLink
                class="mx-auto lg:mx-0 font-bold text-theme-secondary rounded-full my-2 w-min whitespace-nowrap py-2 text-center px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex flex-row items-center text-sm"
                :to="localePath('how-to-stake-cro')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 mr-2 text-theme-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Overview <b class="ml-1">03:44 min</b>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green-100 w-1/2 h-full">
        <carousel
          center-mode
          adjustable-height
          :per-page="1"
          :pagination-enabled="false"
        >
          <slide>
            <img
              class="h-screen"
              src="https://hub.cosmos.network/main/assets/img/cosmos-hub-image.37c9b2c3.jpg"
              alt=""
            />
          </slide>
        </carousel>
      </div>
    </section>

    <section-f-a-qs />

    <section-action />
  </div>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import { Carousel, Slide } from 'vue-carousel'

const store = namespace('main')

@Component({
  components: { Carousel, Slide },
  layout: 'main',
})
export default class Home extends Vue {
  $chain: any

  @store.Mutation
  public set!: (data: object) => void

  public head() {
    return {
      title: this.$t('pages.home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.meta_description'),
        },
      ],
    }
  }
}
</script>

<style scoped>
@keyframes side-effect {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateY(-60px);
  }
  75% {
    transform: translateX(-60px);
  }
  100% {
    transform: translateY(0px);
  }
}

.left {
  background-size: cover;
  background: url(assets/images/bg.png) no-repeat center;
}

.banner-price {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  text-align: center;
  right: 5%;
  top: 100px;
  z-index: 1;
  animation: side-effect 20s linear infinite;
}
</style>
