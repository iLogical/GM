<template>
  <div id="name">
    <input class="name" :value="character.name" @input="onNameChange($event)">
    <div>
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
    <div>
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
  @import '../../sass/_colours';
  #name {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
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
      races,
      expanded: true
    }
  },
  methods: {
    toggleExpanded () {
      this.expanded = !this.expanded
    },
    onNameChange (e) {
      this.updateCharacter({ character: this.character, changeDelta: { name: e.target.value } })
    },
    onAlignmentChange (e) {
      this.updateCharacter({ character: this.character, changeDelta: { alignment: e.target.value } })
    },
    onGenderChange (e) {
      this.updateCharacter({ character: this.character, changeDelta: { gender: e.target.value } })
    },
    onRaceChange (e) {
      this.updateCharacter({ character: this.character, changeDelta: { race: e.target.value } })
    },
    onClassChange (e) {
      this.updateCharacter({ character: this.character, changeDelta: { class: e.target.value } })
    },
    ...Vuex.mapActions('CharacterModule', ['updateCharacter'])
  }
}
</script>
