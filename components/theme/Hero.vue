<template>
  <div>
    <div class="pt-24 px-4">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div
          class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
        >
          <p
            class="uppercase tracking-loose w-full"
            v-html="$t('hero.pre_title')"
          ></p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            {{ $t('hero.title') }}
          </h1>
          <p class="leading-normal text-2xl mb-8" v-html="$t('hero.desc')"></p>
          <NuxtLink
            tag="button"
            :hidden="['wallet', 'final'].includes(step)"
            prefetch
            :title="$t('stake_now.title')"
            class="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            :to="localePath('how-to-stake-cro')"
            @click.native="set({ name: 'step', value: 'mnemonic' })"
          >
            {{ $t('stake_now.name') }}!
          </NuxtLink>
        </div>
        <div class="w-full md:w-3/5 p-6 text-center">
          <lazy-chart />
        </div>
      </div>
    </div>
    <theme-divider />
  </div>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
export default class Wallet extends Vue {
  @store.Getter
  public step!: string

  @store.Mutation
  public set!: (data: object) => void
}
</script>
