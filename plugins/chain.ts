import { Context, Plugin } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import Chain from '@/core/Chain'

declare module 'vue/types/vue' {
  interface Vue {
    $chain(network: string): Chain
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $chain(network: string): Chain
  }

  interface Context {
    $chain(network: string): Chain
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $chain(network: string): Chain
  }
}

const chain: Plugin = (context: Context, inject: Inject) => {
  inject('chain', new Chain(context.env.CHAIN))
}

export default chain
