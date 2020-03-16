import Vue from 'vue'
import Vuex from 'vuex'
import Hebcal from "hebcal";
import * as KosherZmanim from "kosher-zmanim";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mainDate: new Date(2020, 2, 20),
    mainDate: new Date(),
    coordinates: {
      latitude: 31.777980,
      longitude: 35.235353,
      altitude: null
    },
    showMap: false,
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
        complexZmanim: true
      }
      options.date = state.mainDate;
      options.latitude = state.coordinates.latitude;
      options.longitude = state.coordinates.longitude;
      options.elevation = state.coordinates.altitude;
      return options
    },
    mainHDate: state => {
      let hebcal = new Hebcal.HDate(state.mainDate);
      hebcal.setLocation(state.coordinates.latitude, state.coordinates.longitude)
      return hebcal
    },
    mainKosherZmanim: (state, getters) => {
      return KosherZmanim.getZmanimJson(getters.options).Zmanim;
    },
  },
  mutations: {
    setPosition(state, position) {
      state.coordinates.latitude = position.coords.latitude;
      state.coordinates.longitude = position.coords.longitude;
      state.coordinates.altitude = position.coords.altitude;
    },
    ifShowMap(state) {
      state.showMap = !state.showMap
    },
    showMap(state) {
      state.showMap = true
    },
    selectDate(state, date) {
      state.mainDate = new Date(date)
    }
  },
  actions: {},
  modules: {}
})