<template>
  <div class="row time-row">
    <div class="col">
      <iframe :src="src" width="360" height="270" frameborder="0" style="border:0"></iframe>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import GoogleMapLoader from '@/components/GoogleMapLoader.vue'
  // import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "myMap",
    components: {
      // GoogleMapLoader
    },
    data() {
      return {
       
      };
    },
    mounted() {

    },
    methods: {


    },
    computed: {
      src() {
        return `https://maps.google.com/maps?q=${this.coordinates.latitude}, ${this.coordinates.longitude}&z=15&output=embed`
      },
      coordinates() {
        return this.$store.state.coordinates;
      }



    }
  };
</script>

<style scoped>
  .time-row {
    /* background-color: #085f63; */
    color: #fff;
    margin-top: 2px;
  }

  iframe {
    width: 100%;
  }
</style>