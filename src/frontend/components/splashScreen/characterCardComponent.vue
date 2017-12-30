<template>
  <div id="character-card-component" @click="onCardClicked">
    <div id="titlebar">
      <div id="characterId">
        {{character.id}}
      </div>
      <button id="remove" @click.stop="onRemoveClicked">
        <i class="fa fa-times fa-fw" aria-hidden="true"></i>
      </button>
    </div>
    <br>
    <br>
    Name: {{character.name}}
    <br>
    <br>
    Level: {{character.level}}
    <br>
    <br>
    Race: {{raceName}}
    <br>
    <br>
    Class: {{className}}
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
        color: $colour-text-lighter;
        font-size: 10px;
        font-weight: bolder;
        line-height: 25px;
        &:hover {
          color: $colour-text-lighter-hover;
          cursor: pointer;
        }
      }
      #remove {
        color: $colour-text-lighter;
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
  import classes from '../../../static/classes.json'
  import races from '../../../static/races.json'
  
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        classes,
        races
      }
    },
    computed: {
      className () {
        const c =  this.classes[this.character.class]
        return c ? c.name : ''
      },
      raceName () {
        const r = this.races[this.character.race]
        return r ? r.name : ''
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
