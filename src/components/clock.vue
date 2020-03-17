<template>
  <div class="row row-clock">
    <div class="col center-all pt-4 pb-4">
      <div class="clock">
        <div class="wrap">
          <p class="c12 n">12</p>
          <p class="c6 n">6</p>
          <p class="c3 n">3</p>
          <p class="c-dote n">.</p>
          <div class="num-clock center-all"><template v-if="hours.toString().length === 1">0</template>{{hours}}:<template v-if="minutes.toString().length === 1">0</template>{{minutes}}</div>
          <span class="hour" :style="{transform: `rotate(${hour}deg)`}"></span>
          <span class="minute" :style="{transform: `rotate(${minute}deg)`}"></span>
          <span class="second" :style="{transform: `rotate(${second}deg)`}"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'


  export default {
    name: "clock",
    components: {},
    data() {
      return {
        hour: 0,
        minute: 0,
        second: 0,

        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    mounted() {
      const inc = 1000;
      setInterval(this.clock, inc);
    },
    methods: {
      clock() {
        const date = new Date();

        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.hour = ((this.hours + 11) % 12 + 1) * 30;
        this.minute = this.minutes * 6;
        this.second = this.seconds * 6;
      }
    },
    computed: {

    }
  };
</script>

<style scoped>
.row-clock {
  background-color: #49beb7;
  margin-top: 2px;
  background-image: url('../assets/ass1.png');
  background-size: 420px;
}
  .clock {
    border-radius: 100%;
    background: #ffffff;
    border: 5px solid white;
    box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
  }

  .num-clock {
    width: 90px;
    height: 36px;
    position: absolute;
    top: 106px;
    left: 17px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: inset 0 0 5px 0px #a0a0a0;
    z-index: 1;
    font-size: 22px;
    font-weight: bold;
  }

  .wrap {
    overflow: hidden;
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 100%;
  }

  .wrap .n {
    position: absolute;
    font-size: 25px;
    z-index: 3;
    color: #000;
    margin: 0px;
  }

  .wrap .c12 {
    top: 0;
    right: 45%;  
  }

   .wrap .c6 {
    bottom: 0;
    right: 47%;  
  }

  .wrap .c3 {
top: 43%;
    right: 0;
  }

 .wrap .c-dote {
top: 40%;
    left: 0;
    font-weight: bold;

  }

  .minute,
  .hour {
    position: absolute;
    height: 70px;
    width: 6px;
    margin: auto;
    top: -27%;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  .minute {
    position: absolute;
    height: 97px;
    width: 4px;
    top: -38%;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(90deg);
  }

  .second {
    position: absolute;
    height: 116px;
    width: 2px;
    margin: auto;
    top: -46%;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background: #FF4B3E;
    transform-origin: bottom center;
    transform: rotate(180deg);
    z-index: 2;
  }

  .dot {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: white;
    border: 2px solid #1b1b1b;
    border-radius: 100px;
    margin: auto;
    z-index: 2;
  }
</style>