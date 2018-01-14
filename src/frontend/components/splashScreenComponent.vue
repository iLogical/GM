<template>
  <div id="splash-screen-component">
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours.scss';
  @import '../sass/_cards.scss';
  #splash-screen-component {
  }
</style>
<script>
  import Vuex from 'vuex'

  export default {
    methods: {
      ...Vuex.mapActions(['changeCurrentCharacter'])
    },
    mounted () {
      this.changeCurrentCharacter()
    }
  }
</script>
