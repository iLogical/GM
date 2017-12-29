<template>
  <div id="character-card-component" @click="onCardClicked">
    <div id="titlebar">
      <div id="characterId">
        {{character.id}}
      </div>
      <button id="remove" @click.stop="onRemoveClicked">
        <i class="fa fa-trash fa-fw" aria-hidden="true"></i>
      </button>
    </div>
    <br>
    <br>
    {{character.name}}
    <br>
    <br>
  </div>
</template>
<style lang="scss">
  @import '../../sass/_colours.scss';
  #character-card-component {
    height: 100%;
    width: 100%;
    #titlebar {
      display: flex;
      width: 100%;
      justify-content: space-between;
      #characterId {
        width: 100%;
        color: $colour-background-darker;
        font-size: 10px;
        font-weight: bolder;
        line-height: 25px;        
        text-shadow: 1px 1px transparentize($colour-text, 0.75);
        &:hover {
          color: transparentize($colour-text, 0.75);
          text-shadow: 1px 1px $colour-background-darker;
          cursor: pointer;
        }
      }
      #remove {
        padding: 5px;
        &:hover {
          background-color: transparent;
          color: $colour-danger;
        }
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    methods: {
      onCardClicked () {
        this.changeCurrentCharacter(this.character)
        this.changeCurrentScreen('character')
      },
      onRemoveClicked () {
        this.removeCharacter(this.character)
        this.changeCurrentScreen('splash')
      },
      ...Vuex.mapActions(['changeCurrentScreen', 'changeCurrentCharacter']),
      ...Vuex.mapActions('CharacterModule', ['removeCharacter'])
    }
  }
</script>
