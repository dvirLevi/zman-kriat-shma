<template>
  <div>
    <div class="row title-row ">
      <div class="col center-all mt-5 mb-5">
        <h1 class="text-center">סוף זמן קריאת שמע וזמני היום</h1>
        <h3 class="text-center w-100">יום {{dey}} {{Hdate}}</h3>
      </div>
    </div>
    <clock />
    <div class="row while-row">
      <div class="col-md-6 center-all ">
        <h4 class="w-100 mt-5 text-center">סוף זמן קריאת שמע לשיטת המגן אברהם</h4>
        <h3 class="h1 mt-3 mb-5">{{ SofZmanShmaMGA }}</h3>
      </div>
      <div class="col-md-6 center-all">
        <h4 class="w-100 mt-5 text-center">סוף זמן קריאת שמע לשיטת הגר"א ובעל התניא</h4>
        <h3 class="h1 mt-3 mb-5">{{ SofZmanShmaGRA }}</h3>
      </div>
    </div>
    <dayTime />
  </div>
</template>

<script>
  // @ is an alias to /src
  import clock from '@/components/clock.vue'
  import dayTime from '@/components/dayTime.vue'
  import Hebcal from "hebcal";
  import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "Home",
    components: {
      clock,
      dayTime
    },
    data() {
      return {
days: ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת",]
      };
    },
    computed: {
      SofZmanShmaMGA() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return (
          new Date(zmanim.BasicZmanim.SofZmanShmaMGA).getHours() +
          ":" +
          new Date(zmanim.BasicZmanim.SofZmanShmaMGA).getMinutes()
        );
      },
      SofZmanShmaGRA() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return (
          new Date(zmanim.BasicZmanim.SofZmanShmaGRA).getHours() +
          ":" +
          new Date(zmanim.BasicZmanim.SofZmanShmaGRA).getMinutes()
        );
      },
      Hdate() {
        return new Hebcal.HDate().toString('h');
      },
      dey() {
         return this.days[new Date().getDay()]
      },
      options() {
        return this.$store.state.options
      }
    }
  };
</script>

<style scoped>
  .title-row {
    background-color: #ff5959;
    color: #fff;
  }

  .while-row {
    color: #083538;
    background-color: #facf5a;
    margin-top: 2px;
  }

  .while-row h3 {
    font-size: 65px;
  }
</style>