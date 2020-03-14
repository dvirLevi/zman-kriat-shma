<template>
  <div class="row time-row pb-3">
    <div class="col">
      <div class="row ">
        <div class="col center-all mt-3 mb-3">
          <i class="far fa-calendar-alt h3 ml-2"></i>
          <h3 class="text-center m-0"> זמני היום</h3>
        </div>
      </div>
      <div class="row center-top">
        <!-- <div class="col-md-3 right-column" v-if="holidays.length">
          <h5 class="text-rigth" v-for="day in holidays" :key="day">{{day}}</h5>
        </div> -->

        <div class="col-md-3 right-column" v-if="mainHDate.candleLighting() || mainHDate.havdalah() || holidays.length">
          <template v-if="holidays.length">
            <h5 class="text-rigth" v-for="day in holidays" :key="day">{{day}}</h5>
          </template>
          <template v-if="mainHDate.candleLighting() || mainHDate.havdalah()">
            <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              הדלקת נרות:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.CandleLighting)}}:{{getMinutes(zmanim.CandleLighting)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              הבדלה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.Tzais)}}:{{getMinutes(zmanim.Tzais)}}
            </h5>
          </div>
          </template>
        </div>

        <div class="col-md-3 right-column">
          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              חצות:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.Chatzos)}}:{{getMinutes(zmanim.Chatzos)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              עלות השחר:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.Alos72)}}:{{getMinutes(zmanim.Alos72)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              נץ החמה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.Sunrise)}}:{{getMinutes(zmanim.Sunrise)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              שקיעה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.Sunset)}}:{{getMinutes(zmanim.Sunset)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              צאת הכוכבים:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.TzaisGeonim4Point8Degrees)}}:{{getMinutes(zmanim.TzaisGeonim4Point8Degrees)}}
            </h5>
          </div>

        </div>

        <div class="col-md-3 right-column">
          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              סוף זמן תפילה מג"א:
            </h5>
            <h5 class="w-50 text-rigth">
             {{getHours(zmanim.SofZmanTfilaMGA)}}:{{getMinutes(zmanim.SofZmanTfilaMGA)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              סוף זמן תפילה גר"א:
            </h5>
            <h5 class="w-50 text-rigth">
             {{getHours(zmanim.SofZmanTfilaGRA)}}:{{getMinutes(zmanim.SofZmanTfilaGRA)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              מנחה גדולה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.MinchaGedola)}}:{{getMinutes(zmanim.MinchaGedola)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              מנחה קטנה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.MinchaKetana)}}:{{getMinutes(zmanim.MinchaKetana)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              פלג המנחה:
            </h5>   
            <h5 class="w-50 text-rigth">
              {{getHours(zmanim.PlagHamincha)}}:{{getMinutes(zmanim.PlagHamincha)}}
            </h5>
          </div>
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
      getHours(date) {
        let h = new Date(date).getHours()
        return (h.toString().length <= 1) ? "0" + h : h;
      },
      getMinutes(date) {
        let m = new Date(date).getMinutes()
        return (m.toString().length <= 1) ? "0" + m : m;
      },
    },
    computed: {
      tzeit() {
        let m = new Date(this.mainHDate.getZemanim().shkiah).getMinutes() + 18;
        let h = new Date(this.mainHDate.getZemanim().shkiah).getHours();
        if (m >= 59) {
          h = h + 1;
          m = m - 60;
        }
        if (m.toString().length < 2) {
          return h + ":0" + m
        }
        return h + ":" + m
      },
      mainHDate() {
        return this.$store.getters.mainHDate;
      },
      holidays() {
        let arr = [];
        for (let i in this.mainHDate.holidays()) {
          arr.push(this.mainHDate.holidays()[i].desc[2])
        }
        return arr
      },
       options() {
        return this.$store.getters.options
      },
      zmanim() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return zmanim.Zmanim
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