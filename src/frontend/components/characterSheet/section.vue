<template>
  <div class="section" :style="style">
    <h5 @click="toggleExpanded" class="title">
      <div>{{title}}</div>
      <div v-if="canExpand">
        <div v-if="expanded" v-html="minusIcon"></div>
        <div v-else v-html="plusIcon"></div>
      </div>
    </h5>
    <slot v-if="expanded"></slot>
  </div>
</template>
<style lang="scss">
  @import '../../sass/_colours';
  @import '../../sass/_cards';

  .section {
    @include card(1);
    padding: 1em;
    margin: 0.25em;
    background-color: $colour-background;
    grid-row: span 3;
    grid-column: span 1;
    input, select {
      color: $colour-text-primary;
      background-color: $colour-background;
    }
    h5 {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      &:hover {
        color: $colour-hover;
        svg {
          fill: $colour-hover;
        }
      }
    }
  }
</style>
<script>
  import plusIcon from '../../../static/icons/SVG/plus.svg'
  import minusIcon from '../../../static/icons/SVG/minus.svg'
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      height: {
        type: Number,
        required: false,
        default: 3
      },
      width: {
        type: Number,
        required: false,
        default: 1
      }
    },
    data () {
      return {
        expanded: true,
        plusIcon,
        minusIcon
      }
    },
    computed: {
      style () {
        if (this.expanded) {
          return { 'grid-row': 'span ' + this.height, 'grid-column': 'span ' + this.width }
        }
        return { 'grid-row': 'span 3', 'grid-column': 'span ' + this.width }
      },
      canExpand () {
        return this.height !== 3
      }
    },
    methods: {
      toggleExpanded () {
        this.expanded = !this.expanded
      }
    }
  }
</script>
