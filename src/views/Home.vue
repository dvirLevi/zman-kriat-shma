<template>
  <div>
    <div class="row">
      <div class="col center-all">
        <h1>סוף זמן קריאת שמע</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 center-all">
        <h3 class="h1">{{ SofZmanShmaMGA }}</h3>
      </div>
      <div class="col-md-6 center-all">
        <h3 class="h1">{{ SofZmanShmaGRA }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Hebcal from "hebcal";
import * as KosherZmanim from "kosher-zmanim";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      options: {
        date: new Date(),
        timeZoneId: "Asia/Jerusalem",
        locationName: "Asia/Jerusalem",
        latitude: 31,
        longitude: 35,
        elevation: 0,
        complexZmanim: false
      }
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
    }
  }
};
</script>
