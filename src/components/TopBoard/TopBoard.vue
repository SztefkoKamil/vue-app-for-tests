<template>
  <div class="top-board__container">
    <h3 class="top-board__clickCounterDisplay">{{ clickCounter }}</h3>
    <h3 class="top-board__toUpperDisplay">{{ toUpper }}</h3>
    <h3 class="top-board__toReverseDisplay">{{ toReverse }}</h3>
    <h3 class="top-board__timerBoomDisplay">{{ timerBoom }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '../../main.js'

export default {
  name: 'TopBoard',
  data(){
    return {
      counterOn: false,
      timerBoom: ''
    }
  },
  computed: {
    ...mapGetters([
      'getClickCounter',
      'getToUpper',
      'getToReverse',
      'getTimerBoom'
      ]),
    clickCounter() {
      return this.getClickCounter
    },
    toUpper(){
      return this.getToUpper
    },
    toReverse() {
      return this.getToReverse
    }
  },
  methods: {
    detonate(time) {
      if(this.counterOn){ return }

      this.counterOn = true;
      time = +time

      this.timerBoom = time
      time--
      
      const interval = setInterval(() => {
        if(time === 0){
          this.counterOn = false
          this.timerBoom = 'BOOM!'
          clearInterval(interval)
          this.resetTimer()
        } else {
          this.timerBoom = time
          time--
        }
      }, 1000)
    },
    resetTimer() {
      setTimeout(() => {
        this.timerBoom = ''
      }, 3000)
    }
  },
  created() {
    eventBus.$on('timerBoom', time => {
      this.detonate(time)
    })
  }
}
</script>

<style lang="scss">

.top-board__container {
  width: 700px;
  height: 300px;
  background: hsl(70, 0% ,80%);
  margin-bottom: 20px;
}

</style>
