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
            <div class="w-100 center-all" v-for="day in holidays" :key="day">
            <h5 class="w-100 text-rigth" >{{day}}</h5>
            </div>
          </template>
          <template v-if="holidays[1] === 'ערב פסח'">
            <div class="w-100 center-all">
              <h5 class="w-50 text-rigth">
                סוף זמן אכילת חמץ:
              </h5>
              <h5 class="w-50 text-center">
                 {{getHours(zmanim.SofZmanTfilaMGA19Point8Degrees)}}:{{getMinutes(zmanim.SofZmanTfilaMGA19Point8Degrees)}}
              </h5>
            </div>
            
            <div class="w-100 center-all">
              <h5 class="w-50 text-rigth">
                סוף זמן ביעור חמץ:
              </h5>
              <h5 class="w-50 text-center">
                 {{getHours(zmanim.SofZmanBiurChametzMGA16Point1Degrees)}}:{{getMinutes(zmanim.SofZmanBiurChametzMGA16Point1Degrees)}}
              </h5>
            </div>
          </template>

          <template v-if="mainHDate.candleLighting() || mainHDate.havdalah()">
            <div class="w-100 center-all">
              <h5 class="w-50 text-rigth">
                הדלקת נרות י-ם:
              </h5>
              <h5 class="w-50 text-center">
                {{CandleLightingJerusalem(getHours(zmanim.Sunset), getMinutes(zmanim.Sunset), 40)}}
                <!-- {{getHours(zmanim.Sunset)}}:{{getMinutes(zmanim.Sunset)}} -->
              </h5>
            </div>
            <div class="w-100 center-all">
              <h5 class="w-50 text-rigth">
                הדלקת נרות:
              </h5>
              <h5 class="w-50 text-center">
                {{getHours(zmanim.CandleLighting)}}:{{getMinutes(zmanim.CandleLighting)}}
              </h5>
            </div>

            <div class="w-100 center-all">
              <h5 class="w-50 text-rigth">
                הבדלה:
              </h5>
              <h5 class="w-50 text-center">
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
            <h5 class="w-50 text-center">
              {{getHours(zmanim.Chatzos)}}:{{getMinutes(zmanim.Chatzos)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              עלות השחר:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.Alos72)}}:{{getMinutes(zmanim.Alos72)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              זמן טלית ותפילין:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.Misheyakir10Point2Degrees)}}:{{getMinutes(zmanim.Misheyakir10Point2Degrees)}}
            </h5>
          </div>
          

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              נץ החמה:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.Sunrise)}}:{{getMinutes(zmanim.Sunrise)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              סוף זמן תפילה מג"א:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.SofZmanTfilaMGA)}}:{{getMinutes(zmanim.SofZmanTfilaMGA)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              סוף זמן תפילה גר"א:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.SofZmanTfilaGRA)}}:{{getMinutes(zmanim.SofZmanTfilaGRA)}}
            </h5>
          </div>

          

        </div>

        <div class="col-md-3 right-column">
          

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              מנחה גדולה:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.MinchaGedola)}}:{{getMinutes(zmanim.MinchaGedola)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              מנחה קטנה:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.MinchaKetana)}}:{{getMinutes(zmanim.MinchaKetana)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              פלג המנחה:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.PlagHamincha)}}:{{getMinutes(zmanim.PlagHamincha)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              שקיעה:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.Sunset)}}:{{getMinutes(zmanim.Sunset)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              צאת הכוכבים:
            </h5>
            <h5 class="w-50 text-center">
              {{getHours(zmanim.TzaisGeonim4Point8Degrees)}}:{{getMinutes(zmanim.TzaisGeonim4Point8Degrees)}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              דף יומי:
            </h5>
            <h5 class="w-50 text-center">
              {{mainHDate.dafyomi('h')}}
            </h5>
          </div>


        </div>
      </div>
      <installApp />

    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import installApp from '@/components/installApp.vue'

  export default {
    name: "dayTime",
    components: {
      installApp
    },
    data() {
      return {

      };
    },
    mounted() {

    },
    methods: {
      getHours(date) {
        let h = new Date(date).getHours()
        return this.addZero(h)
      },
      getMinutes(date) {
        let m = new Date(date).getMinutes()
        return this.addZero(m)
      },
      CandleLightingJerusalem(ho, mi, SubtractionM) {
        let h = ho;
        let m = mi - SubtractionM;
        // let checkM = m / SubtractionM;
        if (m < 0) {
          let checkH = Math.floor((SubtractionM - mi) / 60);
          h = h - (checkH + 1);
          m = 60 - Math.abs(m);
        }
        return this.addZero(h) + ":" + this.addZero(m)

      },
      addZero(n) {
        return (n.toString().length <= 1) ? "0" + n : n;
      }
    },
    computed: {
      // tzeit() {
      //   let m = new Date(this.mainHDate.getZemanim().shkiah).getMinutes() + 18;
      //   let h = new Date(this.mainHDate.getZemanim().shkiah).getHours();
      //   if (m >= 59) {
      //     h = h + 1;
      //     m = m - 60;
      //   }
      //   if (m.toString().length < 2) {
      //     return h + ":0" + m
      //   }
      //   return h + ":" + m
      // },
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
      zmanim() {
        return this.$store.getters.mainKosherZmanim;
      },

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

  .col-md-3 div {
    background-color: rgba(255, 255, 255, 0.1);
    margin: 2px;
    padding: 5px
  }

  .col-md-3 div h5 {
    margin: 0px;
  }
</style>