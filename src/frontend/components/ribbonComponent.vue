<template>
  <div id="ribbon-component">
    <div id="ribbon-component-ribbon-buttons">
      <div id="ribbon-component-ribbon-minimize" class="icon" @click="minimize"><i class="fa fa-window-minimize fa-fw" aria-hidden="true"></i></div>
      <div id="ribbon-component-ribbon-maximize" class="icon" @click="maximize"><i class="fa fa-window-maximize fa-fw" aria-hidden="true"></i></div>
      <div id="ribbon-component-ribbon-close" class="icon" @click="quit"><i class="fa fa-times fa-fw" aria-hidden="true"></i></div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours.scss';

  #ribbon-component {
    -webkit-app-region: drag;
    display: flex;    
    height: 25px;
    background-color: $background-color-darker;
    border-bottom: 1px solid $border-color;
    cursor: default;
    #ribbon-component-ribbon-buttons {
      -webkit-app-region: no-drag;
      display: flex;
      position: absolute;
      right: 0;
      top: 0;
      width: 75px;
      height: 25px;
      #ribbon-component-ribbon-minimize, #ribbon-component-ribbon-maximize, #ribbon-component-ribbon-close {        
        text-align: center;
        width: 25px;
        height: 25px;
        line-height: 25px;
        &:hover {
          background-color: $background-color-lighter;
        }
      }
      #ribbon-component-ribbon-close {
        &:hover {
          background-color: $danger;
        }
      }
    }
  }
</style>
<script>
  import { remote } from 'electron'

  export default {
    data () {
      return {
      }
    },
    methods: {
      minimize () {
        var window = remote.getCurrentWindow()
        window.minimize()
      },
      maximize () {
        var window = remote.getCurrentWindow()
        if (!window.isMaximized()) {
          window.maximize()
        } else {
          window.unmaximize()
        }
      },
      quit () {
        var window = remote.getCurrentWindow()
        window.close()
      },
    }
  }
</script>
