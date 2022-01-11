<template>
  <div
    class="flex items-center py-1 px-2 cursor-pointer bg-opacity-25 flex-initial space-x-1 rounded-full"
    :class="{ 'bg-gray-500': loaded }"
    @click="showDesc = true"
  >
    <span :class="statusClass" class="p-1 rounded-full bg-gray-600"></span>
    <span
      class="text-sm text-primary font-thin"
      :class="{ 'animate-pulse': !loaded }"
    >
      {{ name }}
      <span :class="{ hidden: !showDesc }">{{
        $t('statusButton.message', { gap, missed })
      }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

type Signature = {
  validator_address: string
}

type Block = {
  result: {
    block: {
      last_commit: Array<Signature>
    }
  }
}
// commit.result.signed_header.header.height
type Commit = {
  result: {
    signed_header: {
      header: string
    }
  }
}

@Component
export default class Status extends Vue {
  @Prop({ required: true }) name!: string
  @Prop({ required: true }) rpc!: string
  @Prop({ required: true }) validator!: string

  height: number = 0
  gap: number = 10
  missed: number = 0
  loaded: boolean = false
  showDesc: boolean = false

  get statusClass(): string {
    if (!this.loaded) return 'animate-ping'
    else if (this.missed === 0 && this.loaded) return 'bg-green-600'
    else if (this.missed < 10 && this.loaded) return 'bg-yellow-600'

    return 'bg-red-600'
  }

  async checkBlock(height: number): Promise<boolean> {
    const {
      result: {
        block: { last_commit: signatures },
      },
    }: Block = await this.$axios.$get(this.rpc + '/block?height=' + height)

    return signatures.some(
      (signature) => signature.validator_address === this.validator
    )
  }

  async mounted(): Promise<void> {
    try {
      const {
        result: {
          signed_header: { header: height },
        },
      }: Commit = await this.$axios.$get(this.rpc + '/commit')

      this.height = parseInt(height) - 2

      for (
        let height = this.height;
        height > this.height - this.gap;
        height--
      ) {
        if (await this.checkBlock(height)) continue

        this.missed++
      }
      this.loaded = true
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }
}
</script>
