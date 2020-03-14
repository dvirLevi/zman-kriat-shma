<template>
  <div>
    <div class="row title-row ">
      <div class="col center-all mt-3 mb-3">
        <h1 class="text-center">סוף זמן קריאת שמע וזמני היום</h1>
        <h3 class="text-center w-100">יום {{dey}} {{Hdate}}</h3>
        <h3 class="text-center w-100">פרשת {{mainHDate.getSedra('h')[0]}}</h3>
        
      </div>
    </div>
    <clock />
    <findLocation />
    <myMap />
    <div class="row while-row">
      <div class="col-md-6 center-all mga">
        <h4 class="w-100 mt-5 text-center">סוף זמן קריאת שמע לשיטת המגן אברהם</h4>
        <h3 class="h1 mt-3 mb-5">{{ SofZmanShmaMGA }}</h3>
      </div>
      <div class="col-md-6 center-all gra">
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
  import myMap from '@/components/myMap.vue'
  import findLocation from '@/components/findLocation.vue'
  // import Hebcal from "hebcal";
  import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "Home",
    components: {
      clock,
      dayTime,
      findLocation,
      myMap
    },
    data() {
      return {
        days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", ],
     
      };
    },
    computed: {
      SofZmanShmaMGA() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        // console.log(zmanim)
        return (
          new Date(zmanim.Zmanim.SofZmanShmaMGA).getHours() +
          ":" +
          new Date(zmanim.Zmanim.SofZmanShmaMGA).getMinutes()
        );
      },
      SofZmanShmaGRA() {
        const zmanim = KosherZmanim.getZmanimJson(this.options);
        return (
          new Date(zmanim.Zmanim.SofZmanShmaGRA).getHours() +
          ":" +
          new Date(zmanim.Zmanim.SofZmanShmaGRA).getMinutes()
        );
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
      // getMga() {
      //   let HalotHashachar = new Date(this.mainHDate.getZemanim().alot_hashachar).getHours() ;
      //   let MalotHashachar = (new Date(this.mainHDate.getZemanim().alot_hashachar).getMinutes());
      //   console.log(MalotHashachar)

      //   // let HafterShkia = new Date(this.mainHDate.getZemanim().shkiah).getHours() + 1 ;
      //   // let MafterShkia = ((new Date(this.mainHDate.getZemanim().shkiah).getMinutes() + 72 - 60) / 12)*3;
      //   let mmm = (1/100) * (100 / 60) * MalotHashachar;
      //   let Htime = (((this.Htzeit - HalotHashachar) + mmm ) / 12) * 3; 
      //   console.log(Htime)

      //   let difH = Math.floor(Htime)
      //   let difM = (Htime - difH) * (60)

      //   let m =  this.Mtzeit + difM;

      //   if(m >= 59){
      //     let divM = Math.floor(m / 60);
      //     m = m - (divM * 60);


      //     difH = difH + divM
      //   }
      //  return HalotHashachar + difH + ":" + m 
      // },
      // Htzeit() {
      //   let m = new Date(this.mainHDate.getZemanim().shkiah).getMinutes() + 18;
      //   let h = new Date(this.mainHDate.getZemanim().shkiah).getHours();
      //   if (m >= 59) {
      //     h = h + 1;
      //     m = m - 60;
      //   }
      //   return h
      // },
      // Mtzeit() {
      //   let m = new Date(this.mainHDate.getZemanim().shkiah).getMinutes() + 18;
      //   // let h = new Date(this.mainHDate.getZemanim().shkiah).getHours();
      //   if (m >= 59) {
      //     // h = h + 1;
      //     m = m - 60;
      //   }
      //   return m
      // },
       
      // mainHebcal() {
      //   return this.$store.getters.mainHebcal;
      // },
      // cities() {
      //   let sad = new Hebcal.cities.listCities();
      //   return sad
      // },
      // sunrise(){
      //    return this.mainHDate.sunrise()
      // },
      mainHDate() {
        return this.$store.getters.mainHDate;
      },
    }
  };
</script>

<style scoped>
  .title-row {
    background-color: #ff5959e8;
    color: #fff;
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