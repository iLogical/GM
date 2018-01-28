<template>
  <div id="skills">
    <div class="row">
      <div class="row-section skill">
        <div>Acrobatics</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Bluff</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Climb</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Diplomacy</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Disable Device</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Heal</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge Arcana</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge Dungeoneering</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge Geography</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge History</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge Local</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge Nature</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Knowledge Religion</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Perception</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Knowledge Ride</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Sense Motive</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill trained">
        <div>Spellcraft</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Stealth</div>
      </div>
    </div>
    <div class="row">
      <div class="row-section skill">
        <div>Swim</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../sass/_colours';
  #skills {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .row {
      display: flex;
      justify-content: space-between;
      .row-section {
        display: flex;
        justify-content: space-around;
        &.skill {
          border-bottom: 0.0625em solid $colour-accent;
        }
        &.trained {
          border-bottom: 0.0625em solid $colour-divider;
        }
        div {
          padding: 0.5em 0;
        }
        input {
          width: 1em;
          margin: 0 0.01em;
        }
      }
    }
  }
</style>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
