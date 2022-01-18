import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
class StorageMixin extends Vue {
  @store.Mutation
  public set!: (data: object) => void

  @store.Action
  public init!: (data: void) => void

  async mounted(): Promise<void> {
    if (
      sessionStorage.getItem('lion_encrypted_wallet') &&
      sessionStorage.getItem('lion_encrypted_pin') &&
      sessionStorage.getItem('lion_account_address') &&
      this.$store.state.encryptedWallet === null
    ) {
      this.set({
        name: 'pin',
        value: sessionStorage.getItem('lion_encrypted_pin'),
      })

      await this.$store.dispatch('init', '')

      this.$store.commit('set', { name: 'step', value: 'wallet' })
    }
  }
}
export default StorageMixin
