<template>
  <div class="row time-row pb-3">
    <div class="col">
      <div class="row ">
        <div class="col center-all mt-3 mb-3">
          <h3 class="text-center"> זמני היום</h3>
        </div>
      </div>
      <div class="row center-all-around">

        <div class="col-md-3 right-column" v-if="holidays">
          <h5 class="text-rigth" v-for="day in holidays" :key="day">{{day}}</h5>
        </div>
        
        <div class="col-md-3 right-column" v-if="mainHDate.candleLighting() || mainHDate.havdalah()">
          <h5 class="text-rigth" v-if="mainHDate.candleLighting()">הדלקת נרות: {{new Date(mainHDate.candleLighting()).getHours()}}:{{new Date(mainHDate.candleLighting()).getMinutes()}}</h5>
          <h5 class="text-rigth" v-if="mainHDate.havdalah()">הבדלה: {{new Date(mainHDate.havdalah()).getHours()}}:{{new Date(mainHDate.havdalah()).getMinutes()}}</h5>
        </div>

        <div class="col-md-3 right-column">
          <h5 class="text-rigth">חצות: {{new Date(mainHDate.getZemanim().chatzot).getHours()}}:{{new Date(mainHDate.getZemanim().chatzot).getMinutes()}}</h5>
          <h5 class="text-rigth">עלות השחר: {{new Date(mainHDate.getZemanim().alot_hashachar).getHours()}}:{{new Date(mainHDate.getZemanim().alot_hashachar).getMinutes()}}</h5>
          <h5 class="text-rigth">נץ החמה: {{new Date(mainHDate.getZemanim().neitz_hachama).getHours()}}:{{new Date(mainHDate.getZemanim().neitz_hachama).getMinutes()}}</h5>
          <h5 class="text-rigth">שקיעה: {{new Date(mainHDate.getZemanim().shkiah).getHours()}}:{{new Date(mainHDate.getZemanim().shkiah).getMinutes()}}</h5>
          <h5 class="text-rigth">צאת הכוכבים: {{new Date(mainHDate.getZemanim().tzeit).getHours()}}:{{new Date(mainHDate.getZemanim().tzeit).getMinutes()}}</h5>
        </div>

        <div class="col-md-3 right-column">
          <h5 class="text-rigth">סוף זמן תפילה גר"א: {{new Date(mainHDate.getZemanim().sof_zman_tfilla).getHours()}}:{{new Date(mainHDate.getZemanim().sof_zman_tfilla).getMinutes()}}</h5>
          <h5 class="text-rigth">מנחה גדולה: {{new Date(mainHDate.getZemanim().mincha_gedola).getHours()}}:{{new Date(mainHDate.getZemanim().mincha_gedola).getMinutes()}}</h5>
          <h5 class="text-rigth">מנחה קטנה: {{new Date(mainHDate.getZemanim().mincha_ketana).getHours()}}:{{new Date(mainHDate.getZemanim().mincha_ketana).getMinutes()}}</h5>
          <h5 class="text-rigth">פלג המנחה: {{new Date(mainHDate.getZemanim().plag_hamincha).getHours()}}:{{new Date(mainHDate.getZemanim().plag_hamincha).getMinutes()}}</h5>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue
  // import * as KosherZmanim from "kosher-zmanim";

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
      // SofZmanShmaGRA() {
      //   const zmanim = KosherZmanim.getZmanimJson(this.options);
      //   return zmanim;
      // },
      // zmanim() {
      //   const zmanim = KosherZmanim.getZmanimJson(this.options);
      //   return zmanim.BasicZmanim
      // },
      // options() {
      //   return this.$store.getters.options;
      // },
      mainHDate() {
        return this.$store.getters.mainHDate;
      },
      holidays() {
        let arr = [];
        for(let i in this.mainHDate.holidays()){
          arr.push(this.mainHDate.holidays()[i].desc[2])
        }
        return arr
      },
      // Moptions() {
      //   const zmanim = KosherZmanim.getZmanimJson(this.$store.getters.Moptions);
      //   return zmanim;
      // }
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