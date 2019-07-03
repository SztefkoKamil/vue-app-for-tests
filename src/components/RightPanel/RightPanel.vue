<template>
  <div class="right-panel__container">
    <button @click="$store.commit('decrementClickCounter')">decrement</button>
  </div>
</template>

<script>

export default {
  name: 'RightPanel',
}
</script>

<style lang="scss">

.right-panel__container {
  width: 350px;
  height: 600px;
  background: hsl(20, 30%, 60%);
}

</style>
