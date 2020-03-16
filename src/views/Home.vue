<template>
  <div>
    <div class="row title-row ">
      <div class="col center-all mt-3 mb-3">
        <h1 class="text-center">סוף זמן קריאת שמע וזמני היום</h1>
        <h3 class="text-center w-100">יום {{dey}} {{Hdate}} <span>{{formatDate}}</span> </h3>
        <h3 class="text-center w-100">פרשת {{getSedra}}</h3>
        <datepiker />
      </div>
    </div>
    <clock />
    <findLocation />
    <myMap v-show="showMap" />
    <div class="row while-row">
      <div class="col-md-6 center-all mga">
        <h4 class="w-100 mt-5 text-center">סוף זמן קריאת שמע לשיטת המגן אברהם</h4>
        <h3 class="h1 mt-3 mb-5">{{getHours(zmanim.SofZmanShmaMGA)}}:{{getMinutes(zmanim.SofZmanShmaMGA)}}</h3>
      </div>
      <div class="col-md-6 center-all gra">
        <h4 class="w-100 mt-5 text-center">סוף זמן קריאת שמע לשיטת הגר"א ובעל התניא</h4>
        <h3 class="h1 mt-3 mb-5">{{getHours(zmanim.SofZmanShmaGRA)}}:{{getMinutes(zmanim.SofZmanShmaGRA)}}</h3>
      </div>
    </div>
    <dayTime />
  </div>
</template>

<script>
  // @ is an alias to /src
  import clock from '@/components/clock.vue'
  import dayTime from '@/components/dayTime.vue'
  import myMap from '@/components/myMap.vue'
  import findLocation from '@/components/findLocation.vue'
  import datepiker from '@/components/datepiker.vue'
  import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "Home",
    components: {
      clock,
      dayTime,
      findLocation,
      myMap,
      datepiker
    },
    data() {
      return {
        days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", ],

      };
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
       zmanim() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return zmanim.Zmanim
      },
      Hdate() {
        return this.mainHDate.toString('h');
      },
      dey() {
        return this.days[this.mainDate.getDay()]
      },
      options() {
        return this.$store.getters.options
      },
      mainDate() {
        return this.$store.state.mainDate;
      },
      formatDate() {
        var d = this.mainDate,
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
      },
      showMap() {
        return this.$store.state.showMap;
      },
      mainHDate() {
        return this.$store.getters.mainHDate;
      },
      getSedra() {
        return this.mainHDate.getSedra('h').join("-")
      }
    }
  };
</script>

<style scoped>
  .title-row {
    background-color: #ff5959e8;
    color: #fff;
  }

  .title-row h3 span {
    font-size: 20px;
  }

  .while-row {
    color: #083538;
    background-color: #facf5a;
    margin-top: 2px;
  }

  .while-row .mga {
    border-left: solid 1px #fff;
  }

  .while-row .gra {
    border-right: solid 1px #fff;
  }

  .while-row h3 {
    font-size: 65px;
  }

  @media (max-width: 767.98px) {
    .while-row .mga {
      border-left: none;
      border-bottom: solid 1px #fff;
    }

    .while-row .gra {
      border-right: none;
      border-top: solid 1px #fff;
    }
  }
</style>