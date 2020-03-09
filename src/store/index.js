import Vue from 'vue'
import Vuex from 'vuex'
import Hebcal from "hebcal";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mainDate: new Date(2020, 3, 8),
    mainDate: new Date(),
    coordinates: {
      latitude: 31,
      longitude: 35
    }
  },
  getters: {
    options: state => {
      let options = {
        date: new Date(),
        timeZoneId: "Asia/Jerusalem",
        locationName: "Asia/Jerusalem",
        latitude: 31,
        longitude: 35,
        elevation: 0,
        complexZmanim: false
      }
      options.date = state.mainDate;
      options.latitude = state.coordinates.latitude;
      options.longitude = state.coordinates.longitude;
      return options
    },
    // mainHebcal: state => {
    //   let hebcal = new Hebcal(state.mainDate)
    //   return hebcal
    // },
    mainHDate: state => {
      let hebcal = new Hebcal.HDate(state.mainDate);
      hebcal.setLocation(state.coordinates.latitude, state.coordinates.longitude)
      return hebcal
    },
    // Moptions: state => {
    //   let options = {
    //     date: new Date(),
    //     timeZoneId: "Asia/Jerusalem",
    //     locationName: "Asia/Jerusalem",
    //     latitude: 31,
    //     longitude: 35,
    //     elevation: 0,
    //     complexZmanim: true
    //   }
    //   options.date = state.mainDate;
    //   options.latitude = state.coordinates.latitude;
    //   options.longitude = state.coordinates.longitude;
    //   return options
    // },
  },
  mutations: {},
  actions: {},
  modules: {}
})