<template>
  <div id="character-screen-component">
    <div class="character-card" v-for="character in characters" :key="'character_'+character.id">
      <character-card-component :character="character"></character-card-component>
    </div>
    <div id="add" class="character-card" @click="createCharacter" v-html="addIcon">
    </div>
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours';
  @import '../sass/_cards';
  #character-screen-component {
    margin: 0.5em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12.5em, 1fr));
    grid-auto-rows: 18.75em;
    grid-gap: 0.5em;
    .character-card {
      @include card(1);
      background-color: $colour-background;
      padding: 0.5em;
      transition: background-color 0.5s ease-in-out;
      transition: box-shadow 0.5s ease-in-out;
      &:hover {
        @include card(2);
        background-color: hover($colour-background);
        color: $colour-text-hover;
        cursor: pointer;
      }
      &#add {
        svg {
          height: 100%;
          width: 100%;
          display: block;
          margin: auto;
        }
        &:hover {
          svg {
            path {
              fill: $colour-text-hover;
            }
          }
        }
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import CharacterCardComponent from './charactersScreen/characterCardComponent.vue'
  import addIcon from '../../static/icons/SVG/user-plus.svg'

  export default {
    data () {
      return {
        addIcon
      }
    },
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
