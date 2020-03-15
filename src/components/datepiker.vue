<template>
  <div class="w-100 center-all">
    <div class="butt center-all">
      <i class="far fa-calendar-alt m-2 h3 c-p" for="date-input"></i>
      <input id="date-input m-2" type="date" @input="selectDate">
      <div class="text-date center-all">
        {{textDate}}
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: "Home",
    components: {

    },
    data() {
      return {
        textDate: "בחירת תאריך"
      };
    },
    methods: {
      selectDate(e) {
        
        if (e.target.value !== "") {
          this.textDate = this.formatDate(e.target.value);
          this.$store.commit('selectDate', e.target.value)
        } else {
          this.textDate = "בחירת תאריך";
          this.$store.commit('selectDate', new Date())
        }
      },
      formatDate(e) {
        var d = new Date(e),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
      },
    },
    computed: {

    }
  };
</script>

<style scoped>
  .butt {
    background-color: #085f63;
    border-radius: 5px;
    color: #fff;
    /* width: 270px; */
    font-size: 20px;
    font-weight: 100;
    position: relative;
    padding: 9px;
    /* margin-top: 2px; */
  }

  .butt input {
    border: none;
    background-color: #085f6300;
    outline: none;
    /* padding: 5px; */
  }

  .butt i {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 2;
  }

  .text-date {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #085f63;
    border-radius: 5px;
    z-index: 1;
    pointer-events: none;
  }




  @media (max-width: 767.98px) {}
</style>