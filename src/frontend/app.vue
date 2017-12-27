<template>
  <div id="app">
    <div id="main">
      <character-component></character-component>
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
  import CharacterComponent from './components/characterComponent.vue'

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
      RibbonComponent,
      CharacterComponent
    }
  }
</script>
