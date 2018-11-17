<template>
  <div id="ribbon-component">
    <div id="buttons">
      <div id="minimize" class="icon" @click="minimize"><minimize-icon></minimize-icon></div>
      <div v-if="isMaximized" id="maximize" class="icon" @click="maximize"><maximize-icon_shrink></maximize-icon_shrink></div>
      <div v-else id="maximize" class="icon" @click="maximize"><maximize-icon_enlarge></maximize-icon_enlarge></div>
      <div id="close" class="icon" @click="quit"><quit-icon></quit-icon></div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../sass/_colours';
  @import '../sass/_variables';
  #ribbon-component {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    -webkit-app-region: drag;
    display: flex;
    background-color: $colour-ribbon;
    height: 1.66em;
    cursor: default;
    #buttons {
      -webkit-app-region: no-drag;
      display: flex;
      position: absolute;
      right: 0;
      height: 1.66em;
      #minimize, #maximize, #close {
        padding: 0.33em;
        &:hover {
          background-color: $colour-ribbon-hover;
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
import { ipcRenderer, remote } from 'electron'
import maximizeIcon_enlarge from '../../static/icons/SVG/enlarge.svg?inline'
import maximizeIcon_shrink from '../../static/icons/SVG/shrink.svg?inline'
import minimizeIcon from '../../static/icons/SVG/minus.svg?inline'
import quitIcon from '../../static/icons/SVG/cross.svg?inline'

export default {
  data () {
    return {
      isMaximized: remote.getCurrentWindow().isMaximizable()
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
    }
  },
  async mounted () {
    ipcRenderer.on('maximized', (event, maximizedState) => {
      this.isMaximized = maximizedState
    })
  },
  components: {
    maximizeIcon_enlarge,
    maximizeIcon_shrink,
    minimizeIcon,
    quitIcon
  }
}
</script>
