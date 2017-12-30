<template>
  <div id="splash-screen-component">
    <div class="section" v-for="character in characters" :key="'character_'+character.id">
      <character-card-component :character="character"></character-card-component>
    </div>
    <div id="add" class="section" @click="createCharacter">
      <i class="fa fa-plus-square fa-fw" aria-hidden="true"></i>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours.scss';
  @import '../sass/_cards.scss';
  #splash-screen-component {  
    margin: 10px;  
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));    
    grid-auto-rows: 300px;
    grid-gap: 10px;
    .section {
      h5 {
        margin-top: 0;
      } 
      @include card-1;
      background-color: $colour-background-lighter;
      border-radius: 5px;
      padding: 10px;
      transition: background-color 0.1s ease-in-out;
      transition: box-shadow 0.1s ease-in-out;
      transition: transform 0.1s ease-in-out;
      &:hover {
        @include card-2;
        background-color: $colour-background-lighter-hover;
        color: $colour-text-hover;
        transform: scale(1.01, 1.01);         
      }
      &#add {        
        svg {
          height: 100%;
          display: block;
          margin: auto;
          font-size: 100px;
          color: lighten($colour-background-lighter, 3%);
        }
        &:hover {
          svg {            
            color: lighten($colour-background-lighter-hover, 3%);
          }
        }
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import CharacterCardComponent from './splashScreen/characterCardComponent.vue'

  export default {
    computed: {
      ...Vuex.mapState('CharacterModule', ['characters'])
    },
    methods: {
      ...Vuex.mapActions(['changeCurrentCharacter']),
      ...Vuex.mapActions('CharacterModule', ['createCharacter'])
    },
    mounted () {
      this.changeCurrentCharacter()
    },
    components: {
      CharacterCardComponent
    }
  }
</script>
