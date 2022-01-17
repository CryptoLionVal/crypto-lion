<template>
  <nav :class="headerClasses" class="fixed w-full z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-4 py-2"
    >
      <div
        class="pl-4 flex flex-col lg:flex-row md:flex-row items-center text-gray-100"
      >
        <NuxtLink
          prefetch
          :to="localePath('/')"
          :class="{ 'text-blue-900': floating }"
          class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          :title="$t('navbar.logo.link.title')"
        >
          <theme-logo />
        </NuxtLink>
        <lazy-card-rate />
      </div>
      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="hideMenu = !hideMenu"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="contentClasses"
        class="w-full flex flex-col lg:flex-row lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20"
      >
        <ul class="list-reset flex justify-end w-full lg:w-5/6 items-center">
          <li class="mr-3" @click="hideMenu = true">
            <NuxtLink
              v-for="link in $t('navbar.links')"
              :key="link.hash"
              prefetch
              :to="
                typeof link.href === 'string'
                  ? link.href
                  : link.href.hash.length === 0
                  ? localePath(link.href.path)
                  : localePath(link.href.path) + '#' + link.href.hash
              "
              class="inline-block py-2 px-4 no-underline"
              :title="link.title"
              @click.native="
                $store.commit('set', { name: 'step', value: 'first' })
              "
              >{{ link.name }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
          prefetch
          :class="actionClasses"
          :title="$t('stake_now.title')"
          class="mx-auto lg:mx-0 font-bold rounded-full my-2 w-4/6 lg:w-1/6 lg:my-0 py-2 text-center px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          :to="localePath('how-to-stake-cro')"
          @click.native="navigate"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script lang="ts">
import { Component, Prop, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
export default class Navbar extends Vue {
  @Prop({ default: false }) white!: boolean

  floating: boolean = false
  hideMenu: boolean = true

  @store.Getter
  public balance!: number

  @store.Mutation
  public set!: (data: object) => void

  get headerClasses(): object {
    return {
      'bg-white': this.floating,
      shadow: this.floating,
    }
  }

  get contentClasses(): object {
    return {
      'text-gray-100': !this.floating,
      'text-black': this.floating,
      'bg-gray-100': !this.floating,
      'bg-white': this.floating,
      gradient: !this.hideMenu && !this.floating,
      hidden: this.hideMenu,
    }
  }

  get actionClasses(): object {
    return {
      'bg-white': !this.floating,
      gradient: this.floating,
      'text-gray-800': !this.floating,
      'text-white': this.floating,
    }
  }

  get buttonText(): string {
    return this.balance === 0
      ? (this.$t('stake_now.name') as string)
      : // @ts-ignore
        this.balance + ' ' + this.$chain.config('PREFIX').toUpperCase()
  }

  navigate(): void {
    if (this.balance > 0) {
      this.set({ name: 'step', value: 'wallet' })

      return
    }

    this.set({ name: 'step', value: 'mnemonic' })
  }

  mounted(): void {
    this.floating = this.white

    document.addEventListener('scroll', () => {
      if (window.scrollY > 10 || this.white) {
        this.floating = true

        return
      }

      this.floating = false
    })
  }
}
</script>
