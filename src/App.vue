<template>
  <div id="app" class="app">
    <TopBoard></TopBoard>
    <LeftPanel></LeftPanel>
    <RightPanel></RightPanel>
  </div>
</template>

<script>
import TopBoard from './components/TopBoard/TopBoard'
import LeftPanel from './components/LeftPanel/LeftPanel'
import RightPanel from './components/RightPanel/RightPanel'

export default {
  name: 'app',
  components: {
    TopBoard,
    LeftPanel,
    RightPanel
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
