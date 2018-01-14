<template>
  <div id="character-card-component" @click="onCardClicked">
    <div id="titlebar">
      <div id="characterId">
        {{character.id}}
      </div>
      <div id="remove" @click.stop="onRemoveClicked" v-html="removeIcon"></div>
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
  @import '../../sass/_variables.scss';

  #character-card-component {
    height: 100%;
    width: 100%;
    #titlebar {
      display: flex;
      width: 100%;
      justify-content: space-between;
      line-height: 2em;
      border-bottom: 1px solid $colour-divider;
      #characterId {
        @include font('x-small');
        width: 100%;
        color: $colour-text-primary;
        &:hover {
          color: $colour-text-hover;
          cursor: pointer;
        }
      }
      #remove {
        font-size: $font-x-small-size;
        &:hover {
          svg {
            fill: $colour-danger;
          }
        }
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import classes from '../../../static/classes.json'
  import races from '../../../static/races.json'
  import removeIcon from '../../../static/icons/SVG/cross.svg'

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
        races,
        removeIcon
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
        this.changeCurrentScreen('characters')
      },
      ...Vuex.mapActions(['changeCurrentScreen', 'changeCurrentCharacter']),
      ...Vuex.mapActions('CharacterModule', ['removeCharacter'])
    }
  }
</script>
