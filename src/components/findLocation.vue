<template>
  <div class="row time-row pb-3 pt-3">
    <div class="col center-all">
      <findMyLocation />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import findMyLocation from '@/components/findMyLocation.vue'
  // import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "findLocation",
    components: {
      findMyLocation
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
      
    }
  };
</script>

<style scoped>
  .time-row {
    background-color: #ff6868;
    color: #fff;
    margin-top: 2px;
  }

 
</style>