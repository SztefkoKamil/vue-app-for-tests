<template>
  <div class="left-panel__container">
    <button class="left-panel__clickCounterIncrement" @click="$store.commit('incrementClickCounter')">increment</button>
  </div>
</template>

<script>

export default {
  name: 'LeftPanel',
}
</script>

<style lang="scss">

.left-panel__container {
  width: 350px;
  height: 600px;
  background: hsl(160, 30%, 60%);
}

</style>
