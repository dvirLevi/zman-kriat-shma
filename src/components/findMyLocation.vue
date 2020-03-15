<template>
  <div class="w-100 center-all">
    <selectLocation :items="cities" @mySelect="selectCity"/>
    <div class="butt p-2 c-p center-all m-1" @click="getLocation">
      <i class="fas fa-map-marker-alt m-2"></i>
      <p class="m-0">מצא את המיקום שלי</p>
    </div>
    <div class="butt p-2 c-p center-all m-1" @click="ifShowMap">
      <i class="fas fa-map-marked-alt m-2"></i>
      <p v-if="!showMap" class="m-0">הצג מיקום נוכחי במפה</p>
      <p v-else class="m-0">הסתר מיקום נוכחי במפה</p>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import selectLocation from '@/components/selectLocation.vue'
  // import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "findMyLocation",
    components: {
      selectLocation
    },
    data() {
      return {
        cities: [{
            name: 'ירושלים',
            latitude: 31.777980,
            longitude: 35.235353,
            id: 0
          },
          {
            name: 'תל-אביב',
            latitude: 32.079529,
            longitude: 34.792419,
            id: 1
          },
          {
            name: 'חיפה',
            latitude: 32.811016,
            longitude: 34.984933,
            id: 2
          },
          {
            name: 'באר שבע',
            latitude: 31.251202,
            longitude: 34.790857,
            id: 3
          },
        ]
      };
    },
    mounted() {


    },
    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          alert("Geolocation is not supported by this browser.")
        }
      },
      showPosition(position) {
        this.$store.commit('setPosition', position);
        this.$store.commit('showMap')
      },
      selectCity(el) {
        let position = {
          coords: {
            latitude: el.latitude,
            longitude: el.longitude,
          }
        }
        this.$store.commit('setPosition', position)
      },
      ifShowMap() {
        this.$store.commit('ifShowMap')
      }
    },
    computed: {
showMap() {
        return this.$store.state.showMap;
      },
    }
  };
</script>

<style scoped>
  .butt {
    background-color: #085f63;
    border-radius: 5px;
    color: #fff;
    width: 270px;
    font-size: 20px;
    font-weight: 100;
    /* margin-top: 2px; */
  }

  @media (max-width: 767.98px) {
    
  }
</style>