import { Component, namespace, Vue } from 'nuxt-property-decorator'

const store = namespace('main')

@Component
class StorageMixin extends Vue {
  @store.Getter
  public walletEncryptedWallet!: string

  @store.Mutation
  public set!: (data: object) => void

  @store.Action
  public init!: (data: string) => Promise<void>

  async mounted(): Promise<void> {
    if (
      sessionStorage.getItem('lion_encrypted_wallet') &&
      sessionStorage.getItem('lion_encrypted_pin') &&
      sessionStorage.getItem('lion_account_address') &&
      this.walletEncryptedWallet === null
    ) {
      this.set({
        name: 'pin',
        value: sessionStorage.getItem('lion_encrypted_pin'),
      })

      await this.init('')

      this.set({ name: 'step', value: 'wallet' })
    }
  }
}
export default StorageMixin
