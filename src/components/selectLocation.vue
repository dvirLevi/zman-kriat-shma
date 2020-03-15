<template>
  <!-- <div class="w-100 center-all"> -->
  <div class="butt p-2 c-p center-all m-1" @click="showMenu = !showMenu">
    <p class="m-0"> בחר מיקום: {{nameSelect}}</p>
    <i class="fas fa-chevron-down m-2"></i>
    <div class="menu w-100 center-all" v-if="showMenu">
      <p class="w-100 p-1 border-top border-bottem m-0 c-p" v-for="item in items" :key="item.id" @click="select(item)">
        {{item.name}}</p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue
  // import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "selectLocation",
    components: {},
    props: {
      items: Array
    },
    data() {
      return {
        showMenu: false,
        // elSelect: ""
      };
    },
    mounted() {
      this.select(this.items[0])
    },
    methods: {
      select(el) {
        // this.elSelect = el.latitude;
        this.$emit('mySelect', el)
      },
    },
    computed: {
      coordinates() {
        return this.$store.state.coordinates;
      },
      nameSelect() {
        let nameSelect = "";
        for (let i in this.items) {
          if (this.coordinates.latitude === this.items[i].latitude) {
            nameSelect = this.items[i].name
          }
        }
        return (nameSelect === "") ? "אוטומטי" : nameSelect;
      }

    }
  };
</script>

<style scoped>
  .butt {
    background-color: #085f63;
    border-radius: 5px;
    color: #fff;
    width: 270px;
    font-size: 20px;
    font-weight: 100;
    position: relative;
    /* margin-top: 2px; */
  }

  .menu {
    position: absolute;
    background-color: #fff;
    color: #000;
    z-index: 4;
    top: 100%;
    right: 0;
  }

  @media (max-width: 767.98px) {}
</style>