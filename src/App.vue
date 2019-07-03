<template>
  <div id="app" class="app">
    <TopBoard></TopBoard>
  </div>
</template>

<script>
import TopBoard from './components/TopBoard/TopBoard'

export default {
  name: 'app',
  components: {
    TopBoard
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
