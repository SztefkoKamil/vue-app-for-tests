<template>
  <div class="top-board__container">
    <h3 class="top-board__clickCounterDisplay">{{ clickCounter }}</h3>
    <h3 class="top-board__toUpperDisplay">{{ toUpper }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TopBoard',
  data(){
    return {
    }
  },
  computed: {
    clickCounter(){
      const counter = this.$store.getters.getClickCounter
      return counter
    },
    toUpper(){
      const toUpper = this.$store.getters.getToUpper
      return toUpper
    }
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
