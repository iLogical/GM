<template>
  <div id="app">
    <div id="main">
      <div id="main-menu">
        <button @click="changeCurrentScreen('splash')">
          <div v-html="homeIcon"></div>
          <div>Home</div>
        </button>
        <button @click="changeCurrentScreen('characters')">
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
  @import './sass/_colours';
  #app {
    #main {
      position: relative;
      top: 1.718em;
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
  import CharactersScreenComponent from './components/charactersScreenComponent.vue'
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
          case 'characters':
            return 'CharactersScreenComponent'
          case 'character':
            return 'CharacterSheetComponent'
        }
      },
      ...Vuex.mapState(['currentScreen']),
      ...Vuex.mapState('CharacterModule', ['characters'])
    },
    methods: {
      ...Vuex.mapActions(['loadFromStorage', 'changeCurrentScreen'])
    },
    async mounted () {
      this.loadFromStorage()
    },
    components: {
      RibbonComponent,
      CharactersScreenComponent,
      CharacterSheetComponent,
      SplashScreenComponent
    }
  }
</script>
