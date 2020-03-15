<template>
  <div class="container-fluid" id="app">
    <toolBar />
    <router-view/>
    <footer class="row">
      <div class="col center-all pt-2 pb-2 app-life">
      <h4 class="m-0">נבנה ופותח ב<a href="https://apps-life.netlify.com/#/" target="_blanc">AppsLife</a></h4>
    </div>
    </footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'
  

  export default {
    name: "Home",
    components: {
      toolBar
    },
    data() {
      return {
      };
    },

  };
</script>

<style>
h4 a {
  color: #da6464;
    text-decoration: underline;
    cursor: pointer;
}
h4 a:hover {
  color: #da6464;
    text-decoration: underline;
    cursor: pointer;
}
</style>
