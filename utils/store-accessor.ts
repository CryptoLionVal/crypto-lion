import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import main from '~/store/main'

// eslint-disable-next-line import/no-mutable-exports
let mainStore: main

const initialiseStores = (store: Store<any>): void => {
  mainStore = getModule(main, store)
}

export { initialiseStores, mainStore }
