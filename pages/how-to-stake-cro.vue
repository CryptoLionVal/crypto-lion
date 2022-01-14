<template>
  <div class="pt-24">
    <step-first />

    <step-desktop />

    <step-mnemonic />

    <step-defi />

    <step-wallet />

    <step-final />

    <div class="float-right text-xs relative -mt-16 text-gray-300 mr-4">
      Crypto Lion Wallet v1.1.3
    </div>

    <theme-divider />
  </div>
</template>

<script>
export default {
  layout: 'stake',
  data() {
    return {
      title: this.$t('pages.how_to_stake_cro.title'),
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.how_to_stake_cro.meta_description'),
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      en: '/how-to-stake-cro',
      tr: '/cro-nasil-stake-edilir',
    },
  },
}
</script>
