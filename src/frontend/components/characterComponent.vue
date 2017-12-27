<template>
  <div id="character-component">
    <name-component></name-component>
    <ability-component></ability-component>
    <racial-traits-component></racial-traits-component>
    <skills-component></skills-component>
    <armor-and-weapon-proficiencies-component></armor-and-weapon-proficiencies-component>
    <class-features-component></class-features-component>
    <weapons-and-attacks-component></weapons-and-attacks-component>
    <armor-and-armor-class-component></armor-and-armor-class-component>
    <feats-component></feats-component>
    <equipment-component></equipment-component>
    <spells-component></spells-component>
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
    data () {
      return {
      }
    },
    methods: {
      ...Vuex.mapActions('CharacterModule', [''])
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
