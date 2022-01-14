<template>
  <div class="fixed z-50 container flex flex-row justify-end">
    <button
      :title="$t('copier.title')"
      class="mx-auto flex flex-row lg:mx-0 bg-white text-gray-800 font-bold rounded-l-full mt-4 lg:mt-0 py-3 px-6 hover:shadow-2xl shadow-xl hover:opacity-100 opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      @click="copy"
    >
      <svg
        v-if="copied"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-2"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        class="mr-2"
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
      <div class="flex flex-col">
        <span v-if="copied">{{ $t('copier.done_message') }}</span>
        <span v-else>{{ $t('copier.message') }}</span>
        <code class="address opacity-75 bg-gray-400 rounded-full px-2">
          {{ address }}
        </code>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FAQs extends Vue {
  // TODO: Must specify the exact type.
  $chain: any = {}

  copied: boolean = false
  address: string = this.$chain.config('VALIDATOR')

  copy(): void {
    const textArea: HTMLTextAreaElement = document.createElement('textarea')
    textArea.style.position = 'fixed'
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = '0'
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'
    textArea.value = this.address
    document.body.appendChild(textArea)
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

    document.body.removeChild(textArea)
  }
}
</script>

<style scoped>
.container {
  width: 500px;
  bottom: 10vh;
  right: -405px;
}

.container:hover {
  right: 0;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 350px;
    right: -255px;
  }

  .address {
    margin-top: 0.5em;
    font-size: 0.5em;
  }
}
</style>
