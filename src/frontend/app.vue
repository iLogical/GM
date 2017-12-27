<template>
  <div id="app">
    <ribbon-component></ribbon-component>
    <div id="app-main">
    </div>
  </div>
</template>
<style lang="scss">
  @import './sass/_colours.scss';
  #app {
    #app-main {
      position: absolute;
      top: calc(2vh + 25px);
      bottom: 2vh;
      left: 2vh;
      right: 2vh;
      background-color: $background-color-lighter;
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import RibbonComponent from './components/ribbonComponent.vue'

  export default {
    data () {
      return {
      }
    },
    methods: {
      ...Vuex.mapActions(['loadFromStorage'])
    },
    async mounted () {
      this.loadFromStorage()
    },
    components: {      
      RibbonComponent
    }
  }
</script>
