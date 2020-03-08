<template>
  <div class="row time-row pb-3">
    <div class="col">
      <div class="row ">
        <div class="col center-all mt-3 mb-3">
          <h3 class="text-center"> זמני היום</h3>
        </div>
      </div>
      <div class="row center-all-around">
        <div class="col-md-3 right-column">
          <!-- <h5 class="text-center"> {{SofZmanShmaGRA}}</h5> -->
          <h5 class="text-rigth">חצות: {{new Date(zmanim.Chatzos).getHours()}}:{{new Date(zmanim.Chatzos).getMinutes()}}</h5>
          <h5 class="text-rigth">עלות השחר: {{new Date(zmanim.AlosHashachar).getHours()}}:{{new Date(zmanim.AlosHashachar).getMinutes()}}</h5>
          <h5 class="text-rigth">זריחה: {{new Date(zmanim.Sunrise).getHours()}}:{{new Date(zmanim.Sunrise).getMinutes()}}</h5>
          <h5 class="text-rigth">שקיעה: {{new Date(zmanim.Sunset).getHours()}}:{{new Date(zmanim.Sunset).getMinutes()}}</h5>
          <h5 class="text-rigth">צאת הכוכבים: {{new Date(zmanim.Tzais).getHours()}}:{{new Date(zmanim.Tzais).getMinutes()}}</h5>
          
        </div>
        <div class="col-md-3 right-column">
          <h5 class="text-rigth">סוף זמן תפילה מג"א: {{new Date(zmanim.SofZmanTfilaMGA).getHours()}}:{{new Date(zmanim.SofZmanTfilaMGA).getMinutes()}}</h5>
          <h5 class="text-rigth">סוף זמן תפילה גר"א: {{new Date(zmanim.SofZmanTfilaGRA).getHours()}}:{{new Date(zmanim.SofZmanTfilaGRA).getMinutes()}}</h5>
          <h5 class="text-rigth">מנחה גדולה: {{new Date(zmanim.MinchaGedola).getHours()}}:{{new Date(zmanim.MinchaGedola).getMinutes()}}</h5>
          <h5 class="text-rigth">מנחה קטנה: {{new Date(zmanim.MinchaKetana).getHours()}}:{{new Date(zmanim.MinchaKetana).getMinutes()}}</h5>
          <h5 class="text-rigth">פלג המנחה: {{new Date(zmanim.PlagHamincha).getHours()}}:{{new Date(zmanim.PlagHamincha).getMinutes()}}</h5>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue
  import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "dayTime",
    components: {},
    data() {
      return {

      };
    },
    mounted() {

    },
    methods: {

    },
    computed: {
      SofZmanShmaGRA() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return zmanim;
      },
      zmanim() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return zmanim.BasicZmanim
      },
      options() {
        return this.$store.state.options
      }
    }
  };
</script>

<style scoped>
  .time-row {
    background-color: #085f63;
    color: #fff;
    margin-top: 2px;
  }

  h4 {
    font-weight: 400;
  }

  h5 {
    font-weight: 100;
    font-size: 25px;
  }
</style>