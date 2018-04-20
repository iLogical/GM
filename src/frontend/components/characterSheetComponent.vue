<template>
  <div id="character-component">
    <h2>
      <div id="character-component-title">
        <div v-html="quillIcon"></div>
        <div>{{currentCharacter.name}}</div>
      </div>
        <div id="character-component-delete" @click="deleteCharacter">
          <div v-html="removeIcon"></div>
        </div>
    </h2>
    <div id="character-component-grid">
      <character-sheet-section :title="'Name'" :height="8"><name-component :character="currentCharacter"></name-component></character-sheet-section>
      <character-sheet-section :title="'Ability'" :height="12"><ability-component :character="currentCharacter"></ability-component></character-sheet-section>
      <character-sheet-section :title="'Racial Traits'" :height="3"><racial-traits-component :character="currentCharacter"></racial-traits-component></character-sheet-section>
      <character-sheet-section :title="'Skills'" :height="31"><skills-component :character="currentCharacter"></skills-component></character-sheet-section>
      <character-sheet-section :title="'Armor And Weapon Proficiencies'" :height="3"><armor-and-weapon-proficiencies-component :character="currentCharacter"></armor-and-weapon-proficiencies-component></character-sheet-section>
      <character-sheet-section :title="'Class Features'" :height="3"><class-features-component :character="currentCharacter"></class-features-component></character-sheet-section>
      <character-sheet-section :title="'Weapons And Attacks'" :height="3"><weapons-and-attacks-component :character="currentCharacter"></weapons-and-attacks-component></character-sheet-section>
      <character-sheet-section :title="'Armor And Armor Class'" :height="3"><armor-and-armor-class-component :character="currentCharacter"></armor-and-armor-class-component></character-sheet-section>
      <character-sheet-section :title="'Feats'" :height="3"><feats-component :character="currentCharacter"></feats-component></character-sheet-section>
      <character-sheet-section :title="'Equipment'" :height="3"><equipment-component :character="currentCharacter"></equipment-component></character-sheet-section>
      <character-sheet-section :title="'Spells'" :height="3"><spells-component :character="currentCharacter"></spells-component></character-sheet-section>
      <character-sheet-section :title="'Portrait'" :height="3"><div id="l"></div></character-sheet-section>
      <character-sheet-section :title="'History'" :height="3"><div id="m"></div></character-sheet-section>
      <character-sheet-section :title="'Monsters Killed'" :height="3"><div id="n"></div></character-sheet-section>
      <character-sheet-section :title="'Most Damage Dealt'" :height="3"><div id="o"></div></character-sheet-section>
      <character-sheet-section :title="'Notes'" :height="3"><div id="p"></div></character-sheet-section>
    </div>
  </div>
</template>
<style lang="scss">
@import "../sass/_colours";

#character-component {
  h2 {
    padding: 0 0.83em;
    margin: 0.83em 0;
    display: flex;
    justify-content: space-between;
    #character-component-title {
      display: flex;
      svg {
        fill: $colour-accent;
        height: 1.5em;
        margin-right: 0.5em;
      }
    }
    #character-component-delete {
      &:hover {
        svg {
          fill: $colour-danger;
        }
      }
    }
  }
  #character-component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(21em, 1fr));
    grid-auto-rows: 1em;
    grid-gap: 0.5em;
    grid-auto-flow: dense;
  }
}
</style>
<script>
import removeIcon from "../../static/icons/SVG/cross.svg";
import quillIcon from "../../static/icons/SVG/quill.svg";
import Vuex from "vuex";
import CharacterSheetSection from "./characterSheet/section.vue";
import NameComponent from "./characterSheet/name.vue";
import AbilityComponent from "./characterSheet/ability.vue";
import RacialTraitsComponent from "./characterSheet/racialTraits.vue";
import SkillsComponent from "./characterSheet/skills.vue";
import ArmorAndWeaponProficienciesComponent from "./characterSheet/armorAndWeaponProficiencies.vue";
import ClassFeaturesComponent from "./characterSheet/classFeatures.vue";
import WeaponsAndAttacksComponent from "./characterSheet/weaponsAndAttacks.vue";
import ArmorAndArmorClassComponent from "./characterSheet/armorAndArmorClass.vue";
import FeatsComponent from "./characterSheet/feats.vue";
import EquipmentComponent from "./characterSheet/equipment.vue";
import SpellsComponent from "./characterSheet/spells.vue";

export default {
  data() {
    return {
      quillIcon,
      removeIcon
    };
  },
  methods: {
    deleteCharacter() {
      this.removeCharacter(this.currentCharacter)
      this.changeCurrentScreen("characters")
    },
    ...Vuex.mapActions(["changeCurrentScreen"]),
    ...Vuex.mapActions("CharacterModule", ["removeCharacter"])
  },
  computed: {
    ...Vuex.mapGetters([
      "currentCharacter",
      "currentCharacterClass",
      "currentCharacterRace"
    ])
  },
  components: {
    CharacterSheetSection,
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
};
</script>
