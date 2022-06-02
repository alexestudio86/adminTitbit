import Vue from 'vue'
import Vuex from 'vuex'

import comandas from './modules/comandas.js'
import platillos from './modules/platillos.js'
import login from './modules/login.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alertCategory: null,
    alertData: {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    comandas, platillos, login
  }
})
