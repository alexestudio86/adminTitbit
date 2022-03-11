import Vue from 'vue'
import Vuex from 'vuex'

import comandas from './modules/comandas.js'
import platillos from './modules/platillos.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    comandas, platillos
  }
})
