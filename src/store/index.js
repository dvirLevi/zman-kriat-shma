import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {
      date: new Date(),
      timeZoneId: "Asia/Jerusalem",
      locationName: "Asia/Jerusalem",
      latitude: 31,
      longitude: 35,
      elevation: 0,
      complexZmanim: false
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
