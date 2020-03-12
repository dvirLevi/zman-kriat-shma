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
        <div class="col-md-3 right-column" v-if="holidays.length">
          <h5 class="text-rigth" v-for="day in holidays" :key="day">{{day}}</h5>
        </div>

        <div class="col-md-3 right-column" v-if="mainHDate.candleLighting() || mainHDate.havdalah()">
          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              הדלקת נרות:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.candleLighting()).getHours()}}:{{new Date(mainHDate.candleLighting()).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              הבדלה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.havdalah()).getHours()}}:{{new Date(mainHDate.havdalah()).getMinutes()}}
            </h5>
          </div>
        </div>

        <div class="col-md-3 right-column">
          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              חצות:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().chatzot).getHours()}}:{{new Date(mainHDate.getZemanim().chatzot).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              זריחה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().alot_hashachar).getHours()}}:{{new Date(mainHDate.getZemanim().alot_hashachar).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              נץ החמה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().neitz_hachama).getHours()}}:{{new Date(mainHDate.getZemanim().neitz_hachama).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              שקיעה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().shkiah).getHours()}}:{{new Date(mainHDate.getZemanim().shkiah).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              צאת הכוכבים:
            </h5>
            <h5 class="w-50 text-rigth">
              {{tzeit}}
            </h5>
          </div>

        </div>

        <div class="col-md-3 right-column">
          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              סוף זמן תפילה גר"א:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().sof_zman_tfilla).getHours()}}:{{new Date(mainHDate.getZemanim().sof_zman_tfilla).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              מנחה גדולה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().mincha_gedola).getHours()}}:{{new Date(mainHDate.getZemanim().mincha_gedola).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              מנחה קטנה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().mincha_ketana).getHours()}}:{{new Date(mainHDate.getZemanim().mincha_ketana).getMinutes()}}
            </h5>
          </div>

          <div class="w-100 center-all">
            <h5 class="w-50 text-rigth">
              פלג המנחה:
            </h5>
            <h5 class="w-50 text-rigth">
              {{new Date(mainHDate.getZemanim().plag_hamincha).getHours()}}:{{new Date(mainHDate.getZemanim().plag_hamincha).getMinutes()}}
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