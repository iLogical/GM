<template>
  <div id="character-component">
    <div id="a" class="section">
      <h5>Name</h5>
    </div>
    <div id="b" class="section">      
      <h5>Ability Scores</h5>
    </div>
    <div id="c" class="section">
      <h5>Racial Traits</h5>
    </div>
    <div id="d" class="section">      
      <h5>Skills</h5>
    </div>
    <div id="e" class="section">
      <h5>Armor And Weapons</h5>
    </div>
    <div id="f" class="section">
      <h5>Class Features</h5>
    </div>
    <div id="g" class="section">
      <h5>Weapons And Attacks</h5>
    </div>
    <div id="h" class="section">
      <h5>Armor And Armor Class</h5>
    </div>
    <div id="i" class="section">
      <h5>Feats</h5>
    </div>
    <div id="j" class="section">
      <h5>Equipment</h5>
    </div>
    <div id="k" class="section">
      <h5>Prepared Skills</h5>
    </div>
    <div id="l" class="section">
      <h5>Character Portrait</h5>
    </div>
    <div id="m" class="section">
      <h5>Character History</h5>
    </div>
    <div id="n" class="section">
      <h5>Monsters Killed</h5>
    </div>
    <div id="o" class="section">
      <h5>Most Damage Dealt</h5>
    </div>
    <div id="p" class="section">
      <h5>Notes</h5>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours.scss';
  @import '../sass/_cards.scss';
  #character-component {  
    margin: 10px;  
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
    grid-template-rows: repeat(25, 1fr);   
    grid-gap: 10px;
    .section {
      h5 {
        margin-top: 0;
      }
      @include card-1;
      background-color: $background-color-lighter;
      border-radius: 5px;
      padding: 10px;
    }
    #a {
      grid-column: 1 / 3;
    }
    #b {
      grid-column: 1;
      grid-row: 2 / 5;
    }
    #c {
      grid-column: 1;
      grid-row: 5 / 7;
    }
    #d {
      grid-column: 1;
      grid-row: 7 / 18;
    }
    #e {
      grid-column: 1;
      grid-row: 18 / 20;
    }
    #f {
      grid-column: 2;
      grid-row: 2 / 7;
    }
    #g {
      grid-column: 2;
      grid-row: 7 / 12;
    }
    #h {
      grid-column: 2;
      grid-row: 12 / 14;
    }
    #i {
      grid-column: 2;
      grid-row: 14 / 16;
    }    
    #j {
      grid-column: 1;
      grid-row: 20 / 26;
    }    
    #k {
      grid-column: 2;
      grid-row: 16 / 26;
    }
  }
</style>
<script>
  import Vuex from 'vuex'

  export default {
    data () {
      return {
      }
    },
    methods: {
      ...Vuex.mapActions('CharacterModule', [''])
    }
  }
</script>
