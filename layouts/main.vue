<template>
  <div>
    <theme-navbar white />

    <Nuxt />

    <theme-footer />

    <cookie-box />
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import StorageMixin from '~/mixins/StorageMixin'

@Component
export default class Main extends mixins(StorageMixin) {
  public head() {
    return {
      titleTemplate: this.$t('title_template'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta_description'),
        },
      ],
    }
  }
}
</script>
