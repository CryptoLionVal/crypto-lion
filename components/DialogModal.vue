<template>
  <transition name="fade">
    <div
      v-if="dialogVisible"
      class="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center items-center m-3 min-h-screen text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <h2
            v-if="dialogType !== 'warning'"
            class="gradient w-full text-xl py-2 leading-6 px-4 text-gray-200"
          >
            {{ dialogMessage }}

            <button class="float-right font-black text-red-600" @click="hide">
              x
            </button>
          </h2>
          <h2 v-else class="w-full text-xl pt-5 leading-6 px-4 text-gray-800">
            {{ dialogMessage }}
          </h2>
          <div class="bg-white p-2 md:p-5 w-full">
            <div class="flex flex-col pt-4">
              <form
                v-if="dialogType === 'password' || dialogType === 'confirm'"
                autocomplete="off"
                class="flex justify-between w-full"
              >
                <input
                  v-for="index in 6"
                  :key="index"
                  :ref="index"
                  v-model="models[index]"
                  type="password"
                  maxlength="1"
                  class="w-1/6 h-8 md:h-16 mx-1 text-center border-2 text-gray-800 font-extrabold text-4lg"
                  @keyup.prevent="handleInput"
                  @focus="current = index"
                />
                <button
                  ref="unlock"
                  type="button"
                  :disabled="!validPassword"
                  :class="{
                    'cursor-not-allowed': !validPassword,
                    'transform-none': !validPassword,
                    'hover:text-yellow-300': validPassword,
                    'opacity-50': !validPassword,
                  }"
                  class="rounded-full flex content-center justify-center flex-auto p-2 md:p-4 m-0 ml-2 gradient text-gray-200 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  @click.prevent="hide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2 mr-3 w-4 md:w-8 md:h-8 h-4"
                  >
                    <path
                      class="heroicon-ui"
                      d="M9 10h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2V7a5 5 0 1 1 10 0 1 1 0 0 1-2 0 3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </button>
              </form>
              <a
                v-else
                class="rounded-full self-end flex flex-row content-center cursor-pointer justify-center w-1/5 p-1 bg-transparent text-red-600 font-bold transform transition hover:scale-105 duration-200 ease-in-out"
                @click.prevent="hideDialog"
              >
                <span class="text-xl">
                  {{ $t('dialog.button.close') }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, namespace, Vue, Watch } from 'nuxt-property-decorator'
import { Sha256 } from '@cosmjs/crypto'

const store = namespace('main')

interface Models {
  [key: string]: string
}

const models: Models = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
}

@Component
export default class DialogModal extends Vue {
  $refs!: {
    [key: number]: HTMLInputElement[]
  }

  current: number = 1
  first: string = ''
  pin: string = ''
  models: Models = { ...models }

  @store.Getter
  public dialogPin!: string

  @store.Getter
  public dialogType!: string

  @store.Getter
  public dialogVisible!: boolean

  @store.Getter
  public dialogSaved!: boolean

  @store.Getter
  public dialogMessage!: string

  @store.Mutation
  public hideDialog!: (data: void) => void

  @store.Mutation
  public set!: (data: object) => void

  @store.Mutation
  public dialog!: (data: object) => void

  @store.Action
  public savePin!: (data: string) => void

  @store.Action
  public resetDialog!: (data: void) => void

  dialogConfirmed: any

  get encryptedPin(): string {
    return new Sha256(Uint8Array.from(this.pin as Iterable<number>))
      .digest()
      .toString()
  }

  get validPassword(): boolean {
    return this.dialogType === 'password'
      ? this.pin.length === 6 &&
          this.first.length === 6 &&
          this.pin === this.first
      : this.pin.length === 6
  }

  @Watch('models', { deep: true })
  modelsChanged(newValue: object): void {
    this.pin = Object.values(newValue).join('')
  }

  @Watch('dialogVisible')
  dialogVisibleChanged(newValue: object): void {
    if (newValue && this.dialogType === 'password') {
      setTimeout(() => this.$refs[1][0].focus(), 600)
    }
  }

  hide(): void {
    this.hideDialog()

    if (this.dialogType === 'password') {
      this.savePin(this.pin)
    } else if (
      this.dialogType === 'confirm' &&
      this.dialogPin === this.encryptedPin
    ) {
      this.set({ name: 'confirmed', value: true })
    } else if (typeof this.dialogConfirmed === 'function') {
      this.set({ name: 'confirmed', value: false })
    } else {
      this.set({ name: 'saved', value: null })
    }

    this.reset()
  }

  handleInput(e: KeyboardEvent): void {
    switch (e.key) {
      case 'Backspace':
        this.models[this.current] = ''
        if (this.current === 1) return
        this.$refs[--this.current][0].focus()
        break
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if (this.models[this.current] === '') this.models[this.current] = e.key

        if (this.current === 6) break

        this.$refs[++this.current][0].focus()
        break
      default:
        this.models[this.current] = ''
        return
    }

    if (this.validPassword)
      ((this.$refs as any).unlock as HTMLButtonElement).focus()

    if (
      this.pin.length === 6 &&
      this.first.length === 0 &&
      this.dialogType === 'password'
    ) {
      this.first = this.pin
      this.current = 1
      this.models = { ...models }
      this.dialog({
        name: 'message',
        value: this.$t('dialog.messages.confirm'),
      })

      this.$refs[1][0].focus()
    }
  }

  reset(): void {
    this.resetDialog()

    this.current = 1
    this.first = ''
    this.pin = ''
    this.models = { ...models } as Models
  }
}
</script>
