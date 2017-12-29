<template>
  <div id="name" class="section">
    <div class="wrapper">      
      <h5 class="title">Name</h5>
      <input class="name" :value="character.name" @input="onNameChange($event)">
      <div class="alignment-and-gender">
        <select class="alignment"></select>
        <select class="gender"></select>
      </div>    
      <select class="race"></select>
      <select class="class"></select>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../sass/_colours.scss';
  #name {
    grid-column: 1 / 3;
    grid-row: 1;
    .wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);    
      grid-template-rows: repeat(2, 1fr);   
      grid-gap: 2px;
      .title {
        grid-column: 1 / 3;
        grid-row: 1;
      }
      .name {
        grid-column: 1 / 2;
        grid-row: 2;
      }
      .alignment-and-gender {
        grid-column: 2 / 3;
        grid-row: 2;
        .alignment, .gender {
          width: 49%;
          height: 100%;
        }
      }
      .race {
        grid-column: 3 / 5;
        grid-row: 1;
      }
      .class {
        grid-column: 3 / 5;
        grid-row: 2;
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
      onNameChange (e) {
        this.updateCharacter({character: this.character, changeDelta: {name: e.target.value}})
      },
      ...Vuex.mapActions('CharacterModule', ['updateCharacter'])
    }
  }
</script>
