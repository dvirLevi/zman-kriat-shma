<template>
  <!-- <div class="row row-sticky"> -->
    <!-- <div class="col"> -->
      <div class="bac-menu" @click="$emit('close')" :class="{menusToolBar: !ifMenu}">
        <div class="center-all wrap-items">
          <router-link class="items-menu" :to="item.link" v-for="item in categories" :key="item.id"
            router-link-active>{{item.name}}</router-link>
          <!-- <div class="mobile w-100">
            <div class="w-100 center-all h2 mt-3 ">
              <div class="w-50 text-center">
                <a href="https://www.instagram.com/napoli_pizza_oven_israel/" target="_blanc"><i
                    class="fab fa-instagram"></i></a>
              </div>
              <div class="w-50 text-center">
                <a href="https://www.facebook.com/napoli.oven.il/?__tn__=%2Cd%2CP-R&eid=ARAZokdIjzsZ4vZNMygiFQkyPLRRFrasxpFNiUCIhgwgD6_gfbXwOGZCbl0PJH3tjZODw30-sK0D7Die"
                  target="_blanc"><i class="fab fa-facebook-f"></i></a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'menus',
    components: {
     
    },
    props: {
ifMenu: Boolean
    },
    data() {
      return {
        // ifMenu: true,
        categories: [
          {
            name: "ראשי",
            link: "/",
            id: 0
          },
          {
            name: "קריאת שמע",
            link: "/Shema",
            id: 1
          },
          // {
          //   name: "יצירת קשר",
          //   link: "/",
          //   id: 2
          // },
        ]

      }
    },
    computed: {
      // categories() {
      //   return this.$store.state.categories
      // },
      
    },
    methods: {
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
    .menusToolBar {
      display: none;
    }


    .bac-menu {
      position: fixed;
      width: 100%;
      z-index: 2;
      background: #3333338c;
      right: 0;
      top: 0;
      height: 100%;
    }

    .wrap-items {
      width: 20%;
      background: #aad1d1;
      height: 100%;
      flex-direction: column;
    }

    .items-menu {
      margin: 0;
      padding: 19px 25px;
      width: 100%;
      border-bottom: solid rgb(0, 0, 0) 1px;
      font-size: 21px;
    }

    .items-menu:last-child {
      border-bottom: none;
    }

    .icon-cart {
      position: static;
    }

    .point-green {
      width: 10px;
      height: 10px;
      /* top: 0px; */
      right: 7px;
      position: absolute;
      border-radius: 100px;
      background-color: #ff9743;
    }

    @media (max-width: 767.98px) {
 .wrap-items {
      width: 58%;
    }
    }
  
</style>