<template>
  <div class="left-panel__container">
    <button class="left-panel__clickCounterIncrement" @click="$store.commit('incrementClickCounter')">increment</button>
    <form class="left-panel__toUpper-form" @submit.prevent="toUpper">
      <input class="toUpper-input" type="text" v-model="inputToUpper">
      <button class="left-panel__toUpperBtn">transform to Upper</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LeftPanel',
  data() {
    return {
      inputToUpper: ''
    }
  },
  methods: {
    toUpper(){
      this.$store.dispatch('toUpper', this.inputToUpper);
      this.inputToUpper = '';
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
