<template>
  <div class="left-panel__container">
    <button class="left-panel__clickCounterIncrement" @click="$store.commit('incrementClickCounter')">increment</button>
    <form class="left-panel__toUpper-form" @submit.prevent="toUpper">
      <input class="toUpper-input" type="text" v-model="inputToUpper">
      <button class="left-panel__toUpperBtn">transform to Upper</button>
    </form>
    <form class="left-panel__timerBoom-form" @submit.prevent="timerBoom">
      <input class="timerBoom-input" type="number" v-model="inputTimerBoom">
      <button class="left-panel__timerBoomBtn">type seconds to detonate</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
  name: 'LeftPanel',
  data() {
    return {
      inputToUpper: '',
      inputTimerBoom: ''
    }
  },
  methods: {
    toUpper() {
      this.$store.dispatch('toUpper', this.inputToUpper)
      this.inputToUpper = ''
    },
    timerBoom() {
      eventBus.$emit('timerBoom', this.inputTimerBoom)
      this.inputTimerBoom = ''
    }
  }
}
</script>

<style lang="scss">

.left-panel__container {
  width: 350px;
  height: 600px;
  background: hsl(160, 30%, 60%);
}

</style>
