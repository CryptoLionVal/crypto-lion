<template>
  <transition name="fade">
    <section
      v-if="walletStep === 'desktop'"
      :id="$t('pages.how_to_stake_cro.steps_id')"
      class="bg-transparent border-b pb-10 px-4"
    >
      <div class="container max-w-5xl mt-32 mx-auto m-8">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-200"
        >
          {{ $t('pages.how_to_stake_cro.title') }}
        </h1>
        <div class="w-full mb-4">
          <div
            class="flex flex-wrap md:flex-no-wrap space-y-2 md:space-y-0 md:space-x-5 content-between"
          >
            <card-step
              v-for="defiStep in $t(
                'pages.how_to_stake_cro.steps.desktop.steps'
              )"
              :key="defiStep.title"
              :title="defiStep.title"
              :icon="defiStep.icon"
              :desc="defiStep.description"
            />
          </div>
        </div>
        <div>
          <img
            class="rounded-xl"
            alt="How to stake CRO"
            src="@/assets/images/staking.gif"
          />
        </div>
        <div class="text-center w-full">
          <a
            class="rounded-full flex flex-row content-center cursor-pointer justify-center w-1/5 p-1 mt-6 mb-32 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out"
            @click.prevent="set({ name: 'step', value: 'first' })"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-800 stroke-2 fill-current"
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
        </div>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
export default class Wallet extends Vue {
  @store.Getter
  public walletStep!: string

  @store.Mutation
  public set!: (data: object) => void
}
</script>
