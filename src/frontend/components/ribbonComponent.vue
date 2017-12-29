<template>
  <div id="ribbon-component">
    <div id="buttons">
      <div id="minimize" class="icon" @click="minimize"><i class="fa fa-window-minimize fa-fw" aria-hidden="true"></i></div>
      <div id="maximize" class="icon" @click="maximize"><i class="fa fa-window-maximize fa-fw" aria-hidden="true"></i></div>
      <div id="close" class="icon" @click="quit"><i class="fa fa-times fa-fw" aria-hidden="true"></i></div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours.scss';
  #ribbon-component {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    -webkit-app-region: drag;
    display: flex;    
    height: 25px;
    background-color: $colour-background-darker;
    border-bottom: 1px solid $colour-border;
    cursor: default;
    #buttons {
      -webkit-app-region: no-drag;
      display: flex;
      position: absolute;
      right: 0;
      top: 0;
      width: 75px;
      height: 25px;
      #minimize, #maximize, #close {        
        text-align: center;
        width: 25px;
        height: 25px;
        line-height: 25px;
        &:hover {
          background-color: $colour-background-lighter;
        }
      }
      #close {
        &:hover {
          background-color: $colour-danger;
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
