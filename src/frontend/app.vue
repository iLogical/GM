<template>
  <div id="app">
    <div id="main">
      <div id="main-menu">
        <button @click="changeCurrentScreen('splash')">
          <div v-html="homeIcon"></div>
          <div>Home</div>
        </button>
        <button @click="changeCurrentScreen('splash')">
          <div v-html="characterIcon"></div>
          <div>Characters</div>
        </button>
      </div>
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
      top: 2em;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      @media (min-width: 60em) {
        max-width: 75%;
      }
      #main-menu {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2em;
        display: flex;
        button {
          display: flex;
          div {
            svg {
              padding-right: 0.25em;
            }
          }
        }
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import RibbonComponent from './components/ribbonComponent.vue'
  import SplashScreenComponent from './components/splashScreenComponent.vue'
  import CharacterSheetComponent from './components/characterSheetComponent.vue'
  import homeIcon from '../static/icons/SVG/home.svg'
  import characterIcon from '../static/icons/SVG/user.svg'

  export default {
    data () {
      return {
        homeIcon,
        characterIcon
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
