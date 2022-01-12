<template>
  <a
    :hidden="hasClient"
    class="rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-1/5 p-1 mt-6 bg-red-600 mb-32 text-gray-200 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out"
    @click.prevent="logout"
  >
    <span class="text-xl">
      {{ $t('pages.how_to_stake_cro.logout_button') }}
    </span>
  </a>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Logout extends Vue {
  $chain: any

  get hasClient(): boolean {
    return this.$chain.client === null
  }

  get logoutConfirm(): string {
    return this.$t('pages.how_to_stake_cro.logout_confirm') as string
  }

  logout() {
    if (!confirm(this.logoutConfirm)) return

    this.$store.dispatch('resetStore')

    sessionStorage.removeItem('lion_encrypted_wallet')
    sessionStorage.removeItem('lion_encrypted_pin')
    sessionStorage.removeItem('lion_account_address')
  }
}
</script>
