export default {
  async mounted() {
    if (
      sessionStorage.getItem('lion_encrypted_wallet') &&
      sessionStorage.getItem('lion_encrypted_pin') &&
      sessionStorage.getItem('lion_account_address') &&
      this.$store.state.encryptedWallet === null
    ) {
      this.$store.commit('set', {
        name: 'pin',
        value: sessionStorage.getItem('lion_encrypted_pin'),
      })

      await this.$store.dispatch('init', '')

      this.$store.commit('set', { name: 'step', value: 'wallet' })
    }
  },
}
