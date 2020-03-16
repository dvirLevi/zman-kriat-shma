<template>
  <nav class="row pb-2 pt-2 row-nav">
    <div class="col center-all-between">
      <router-link to="/" class="logo center-all">
        <img src="../assets/logo.png" alt="">
        <!-- <p class="mb-0">שמע בזמנה</p> -->
      </router-link>
      <div class="bar">
        <div class="circle-bar contain" @click="ifMenu = !ifMenu">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <menus :ifMenu="ifMenu" @close="ifMenu = !ifMenu" />
    </div>
  </nav>
</template>

<script>
  // @ is an alias to /src
  import menus from '@/components/menus.vue'

  export default {
    name: "toolBar",
    components: {
      menus
    },
    data() {
      return {
        ifMenu: false
      };
    },
    mounted() {

    },
    methods: {

    },
    computed: {

    }
  };
</script>

<style scoped>
  .row {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .row-nav {
    background-color: #d8e8e8;
  }

  .logo img {
    width: 95px;
    position: relative;
    z-index: 5;
  }

  .logo p {
    color: #083538;
    font-size: 22px;
    font-weight: 700;
    margin-right: -41px;
    margin-top: 27px;

  }

  .circle-bar {
    position: relative;
    border-radius: 100px;
    background-color: #aad1d1;
    width: 75px;
    height: 75px;
    z-index: 2000;
  }

  .circle-bar:hover {
    background-color: #84bbbb;
  }

  .contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 3;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 45px;
    height: 5px;
    background-color: #083538;
    margin: 3px 0;
    transition: 0.4s;
  }
</style>