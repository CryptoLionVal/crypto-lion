<template>
  <div class="flex flex-wrap">
    <div
      class="w-full flex flex-row align-middle font-bold text-xl text-gray-800 px-6 py-2 cursor-pointer"
      @click="opened = !opened"
    >
      <span class="w-11/12">{{ title }}</span>
      <button class="w-1/12 text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class=""
          :class="{ 'transform rotate-180': opened }"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          />
        </svg>
      </button>
    </div>
    <p
      v-if="opened"
      class="text-gray-800 text-base px-6 mb-5"
      v-html="description"
    ></p>

    <div v-if="separate" class="separator w-full gradient my-0 mx-6"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Logout extends Vue {
  @Prop({ default: false }) separate!: boolean
  @Prop({ default: false }) readable!: boolean
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) description!: string

  opened: boolean = false

  mounted(): void {
    this.opened = this.readable
  }
}
</script>

<style>
.separator {
  height: 0.06rem;
}
</style>
