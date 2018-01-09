<template>
  <div id="character-component">
    <name-component :character="currentCharacter"></name-component>
    <ability-component :character="currentCharacter"></ability-component>
    <racial-traits-component :character="currentCharacter"></racial-traits-component>
    <skills-component :character="currentCharacter"></skills-component>
    <armor-and-weapon-proficiencies-component :character="currentCharacter"></armor-and-weapon-proficiencies-component>
    <class-features-component :character="currentCharacter"></class-features-component>
    <weapons-and-attacks-component :character="currentCharacter"></weapons-and-attacks-component>
    <armor-and-armor-class-component :character="currentCharacter"></armor-and-armor-class-component>
    <feats-component :character="currentCharacter"></feats-component>
    <equipment-component :character="currentCharacter"></equipment-component>
    <spells-component :character="currentCharacter"></spells-component>
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(21em, 1fr));
    grid-auto-flow: dense;
    .section {
      @include card(1);
      padding: 1em;
      margin: 0.25em;
      background-color: $colour-background-lighter;
      input, select {
        color: $colour-text-primary;
        background-color: $colour-background-lighter;
      }
    }
  }
</style>
<script>
  import Vuex from 'vuex'
  import NameComponent from './characterSheet/name.vue'
  import AbilityComponent from './characterSheet/ability.vue'
  import RacialTraitsComponent from './characterSheet/racialTraits.vue'
  import SkillsComponent from './characterSheet/skills.vue'
  import ArmorAndWeaponProficienciesComponent from './characterSheet/armorAndWeaponProficiencies.vue'
  import ClassFeaturesComponent from './characterSheet/classFeatures.vue'
  import WeaponsAndAttacksComponent from './characterSheet/weaponsAndAttacks.vue'
  import ArmorAndArmorClassComponent from './characterSheet/armorAndArmorClass.vue'
  import FeatsComponent from './characterSheet/feats.vue'
  import EquipmentComponent from './characterSheet/equipment.vue'
  import SpellsComponent from './characterSheet/spells.vue'

  export default {
    computed: {
      ...Vuex.mapGetters(['currentCharacter', 'currentCharacterClass', 'currentCharacterRace'])
    },
    components: {
      NameComponent,
      AbilityComponent,
      RacialTraitsComponent,
      SkillsComponent,
      ArmorAndWeaponProficienciesComponent,
      ClassFeaturesComponent,
      WeaponsAndAttacksComponent,
      ArmorAndArmorClassComponent,
      FeatsComponent,
      EquipmentComponent,
      SpellsComponent
    }
  }
</script>
