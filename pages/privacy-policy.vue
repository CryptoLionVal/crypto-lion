<template>
  <section class="bg-white border-b py-10">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('pages.privacy.title') }}
      </h1>

      <div class="text-gray-800" v-html="$t('pages.privacy.content')"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  nuxtI18n: {
    paths: {
      en: '/privacy-policy',
      tr: '/gizlilik-politikasi',
    },
  },
})
export default class PrivacyPolicy extends Vue {
  title: string = this.$t('pages.privacy.title') as string

  public head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.privacy.meta_description'),
        },
      ],
    }
  }
}
</script>
