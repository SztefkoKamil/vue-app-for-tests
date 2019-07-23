<template>
  <div class="right-panel__container">
    <button class="right-panel__clickCounterDecrement" @click="$store.commit('decrementClickCounter')">decrement</button>
    <form class="right-panel__toReverse-form" @submit.prevent="toReverse">
      <input class="toReverse-input" type="text" v-model="inputToReverse">
      <button class="right-panel__toReverseBtn">transform to Reverse</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'RightPanel',
  data() {
    return {
      inputToReverse: ''
    }
  },
  methods: {
    toReverse() {
      this.$store.dispatch('toReverse', this.inputToReverse)
      this.inputToReverse = ''
    }
  }
}
</script>

<style lang="scss">

.right-panel__container {
  width: 350px;
  height: 600px;
  background: hsl(20, 30%, 60%);
}

</style>
