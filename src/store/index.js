import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'Login'
  },
  mutations: {
    CHANGECURRENTPAGE(state, value) {
      state.currentPage = value
    }
  },
  actions: {},
  modules: {}
})
