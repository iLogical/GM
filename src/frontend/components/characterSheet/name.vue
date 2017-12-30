<template>
  <div id="name" class="section">
    <div class="wrapper">      
      <h5 class="title">Name</h5>
      <input class="name" :value="character.name" @input="onNameChange($event)">
      <div class="alignment-and-gender">
        <select class="alignment" :value="character.alignment" @change="onAlignmentChange($event)">
          <option></option>
          <option v-for="(alignment, alignmentIndex) in alignments" :value="alignmentIndex" :key="'alignment_'+alignmentIndex">{{alignment.name}}</option>
        </select>
        <select class="gender" :value="character.gender" @change="onGenderChange($event)">
          <option></option>
          <option value="male">Male</option>
          <option value="female">Female</option>          
        </select>
      </div>    
      <select class="race" :value="character.race" @change="onRaceChange($event)">
        <option></option>
        <option v-for="(race, raceIndex) in races" :value="raceIndex" :key="'race_'+raceIndex">{{race.name}}</option>
      </select>
      <select class="class" :value="character.class" @change="onClassChange($event)"> 
        <option></option>     
        <option v-for="(_class, classIndex) in classes" :value="classIndex" :key="'class_'+classIndex">{{_class.name}}</option>  
      </select>
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
  import alignments from '../../../static/alignments.json'
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
        alignments,
        classes,
        races
      }
    },
    methods: {
      onNameChange (e) {
        this.updateCharacter({character: this.character, changeDelta: {name: e.target.value}})
      },
      onAlignmentChange (e) {
        this.updateCharacter({character: this.character, changeDelta: {alignment: e.target.value}})
      },
      onGenderChange (e) {
        this.updateCharacter({character: this.character, changeDelta: {gender: e.target.value}})
      },
      onRaceChange (e) {
        this.updateCharacter({character: this.character, changeDelta: {race: e.target.value}})
      },
      onClassChange (e) {
        this.updateCharacter({character: this.character, changeDelta: {class: e.target.value}})
      },
      ...Vuex.mapActions('CharacterModule', ['updateCharacter'])
    }
  }
</script>
