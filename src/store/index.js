import { createStore } from 'vuex'
import { packagesModule } from './packagesModule'

export default createStore({
    modules: {
        packages: packagesModule
    }
})