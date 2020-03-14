<template>
  <div class="w-100 center-all">
    <div class="butt p-2 c-p center-all m-1" @click="getLocation">
      <i class="fas fa-map-marker-alt m-2"></i>
      <p class="m-0">הצג זמנים לפי מיקום שלי</p>
    </div>
    <div class="butt p-2 c-p center-all m-1">
      <i class="fas fa-map-marked-alt m-2"></i>
      <p class="m-0">הצג מפה</p>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue
  // import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "findMyLocation",
    components: {},
    data() {
      return {

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
        this.$store.commit('setPosition', position)
        // console.log(position.coords.latitude)
        // console.log(position.coords.longitude)
        // console.log(position.coords.altitude)
      }
    },
    computed: {

    }
  };
</script>

<style scoped>
  .butt {
    background-color: #085f63;
    border-radius: 5px;
    color: #fff;
    width: fit-content;
    font-size: 20px;
    font-weight: 100;
    /* margin-top: 2px; */
  }
</style>