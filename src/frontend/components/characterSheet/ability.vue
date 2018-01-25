<template>
  <div id="ability">
    <div class="row">
      <div class="row-section stat">
        <div>Strength</div>
        <input :value="character.abilities.strength" @input="onStrengthChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section modifier">
          <div>Modifier</div>
          <input disabled :value="strengthModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section stat">
        <div>Dexterity</div>
        <input :value="character.abilities.dexterity" @input="onDexterityChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section modifier">
          <div>Modifier</div>
          <input disabled :value="dexterityModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section stat">
        <div>Constitution</div>
        <input :value="character.abilities.constitution" @input="onConstitutionChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section modifier">
          <div>Modifier</div>
          <input disabled :value="constitutionModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section stat">
        <div>Intelligence</div>
        <input :value="character.abilities.intelligence" @input="onIntelligenceChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section modifier">
          <div>Modifier</div>
          <input disabled :value="intelligenceModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section stat">
        <div>Wisdom</div>
        <input :value="character.abilities.wisdom" @input="onWisdomChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section modifier">
          <div>Modifier</div>
          <input disabled :value="wisdomModifier">
      </div>
    </div>
    <div class="row">
      <div class="row-section stat">
        <div>Charisma</div>
        <input :value="character.abilities.charisma" @input="onCharismaChange($event)" type="number" min="0" max="18">
      </div>
      <div class="row-section modifier">
          <div>Modifier</div>
          <input disabled :value="charismaModifier">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../sass/_colours';
  @import '../../sass/_variables';
  #ability {
    display: flex;
    flex-direction: column;
    .row {
      display: flex;
      justify-content: space-between;
      .row-section {
        display: flex;
        justify-content: space-around;
        border-bottom: 0.0625em solid $colour-accent;
        div {
          padding: 0.5em 0;
        }
        &.stat {
          div {
            width: 6.2em;
          }
        }
        &.modifier {
          div {
            width: 4.1em;
          }
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
    data () {
      return {
        expanded: true
      }
    },
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
      }
    },
    methods: {
      toggleExpanded () {
        this.expanded = !this.expanded;
      },
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
