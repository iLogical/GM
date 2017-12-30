<template>
  <div id="ability" class="section">      
    <h5>Ability Scores</h5>
    <div class="row">
      <div class="row-section">
        <div>Strength</div>
        <input :value="character.abilities.strength" @input="onStrengthChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section">
          <div>Modifier</div>
          <input disabled :value="strengthModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section">
        <div>Dexterity</div>
        <input :value="character.abilities.dexterity" @input="onDexterityChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section">
          <div>Modifier</div>
          <input disabled :value="dexterityModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section">
        <div>Constitution</div>
        <input :value="character.abilities.constitution" @input="onConstitutionChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section">
          <div>Modifier</div>
          <input disabled :value="constitutionModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section">
        <div>Intelligence</div>
        <input :value="character.abilities.intelligence" @input="onIntelligenceChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section">
          <div>Modifier</div>
          <input disabled :value="intelligenceModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section">
        <div>Wisdom</div>
        <input :value="character.abilities.wisdom" @input="onWisdomChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section">
          <div>Modifier</div>
          <input disabled :value="wisdomModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section">
        <div>Charisma</div>
        <input :value="character.abilities.charisma" @input="onCharismaChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section">
          <div>Modifier</div>
          <input disabled :value="charismaModifier">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../sass/_colours.scss';
  #ability {
    grid-column: 1;
    grid-row: 2 / 5;
    .row {
      display: flex;
      justify-content: space-around;    
      font-size: .66em;
      line-height: 2.8em;
      .row-section {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid $colour-border-lighter;
        margin: 0px 3%;
        padding: 1% 0;
        div {
          width: 5.5em;
        }
        input {
          text-align: center;
          border: none;
          max-width: 2em;
        }
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import modifierHelper from '../../helpers/modifiers.js'

  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    computed: {
      strengthModifier () {
        return modifierHelper.calculateModifier(this.character.abilities.strength)
      },
      dexterityModifier () {
        return modifierHelper.calculateModifier(this.character.abilities.dexterity)
      },
      constitutionModifier () {
        return modifierHelper.calculateModifier(this.character.abilities.constitution)
      },
      intelligenceModifier () {
        return modifierHelper.calculateModifier(this.character.abilities.intelligence)
      },
      wisdomModifier () {
        return modifierHelper.calculateModifier(this.character.abilities.wisdom)
      },
      charismaModifier () {
        return modifierHelper.calculateModifier(this.character.abilities.charisma)
      },
    },
    methods: {
      onStrengthChange (e) {
        this.updateCharacterAbilities({character: this.character, changeDelta: {strength: e.target.value}})
      },
      onDexterityChange (e) {
        this.updateCharacterAbilities({character: this.character, changeDelta: {dexterity: e.target.value}})
      },
      onConstitutionChange (e) {
        this.updateCharacterAbilities({character: this.character, changeDelta: {constitution: e.target.value}})
      },
      onIntelligenceChange (e) {
        this.updateCharacterAbilities({character: this.character, changeDelta: {intelligence: e.target.value}})
      },
      onWisdomChange (e) {
        this.updateCharacterAbilities({character: this.character, changeDelta: {wisdom: e.target.value}})
      },
      onCharismaChange (e) {
        this.updateCharacterAbilities({character: this.character, changeDelta: {charisma: e.target.value}})
      },
      ...Vuex.mapActions('CharacterModule', ['updateCharacterAbilities'])
    }
  }
</script>
