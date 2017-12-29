<template>
  <div id="app">
    <div id="main">
      <button @click="changeCurrentScreen('splash')">Home</button>
      <component :is="currentScreenComponent"></component>
    </div>
    <ribbon-component></ribbon-component>
  </div>
</template>
<style lang="scss">
  @import './sass/_colours.scss';
  #app {
    #main {   
      position: relative; 
      top: 25px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      @media (min-width: 960px) {
        max-width: 75%;
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import RibbonComponent from './components/ribbonComponent.vue'
  import SplashScreenComponent from './components/splashScreenComponent.vue'
  import CharacterSheetComponent from './components/characterSheetComponent.vue'

  export default {
    data () {
      return {
      }
    },
    computed: {
      currentScreenComponent () {
        switch (this.currentScreen) {
          case 'splash':
            return 'SplashScreenComponent'
          case 'character':
            return 'CharacterSheetComponent'
        }
      },
      ...Vuex.mapState(['currentScreen']),
      ...Vuex.mapState('CharacterModule', ['characters']),
    },
    methods: {
      ...Vuex.mapActions(['loadFromStorage', 'changeCurrentScreen'])
    },
    async mounted () {
      this.loadFromStorage()
    },
    components: {      
      RibbonComponent,
      SplashScreenComponent,
      CharacterSheetComponent
    }
  }
</script>
