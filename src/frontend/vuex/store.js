import Vue from 'vue'
import Vuex from 'vuex'
import localforage from 'localforage'
import CharacterModule from './characterModule'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    strict: process.env.NODE_ENV !== 'production',
    state: {
      currentScreen: 'splash',
      currentCharacterId: ''
    },
    mutations: {
      CHANGE_CURRENT_SCREEN (state, { screen }) {
        state.currentScreen = screen
      },
      CHANGE_CURRENT_CHARACTER (state, { character }) {
        state.currentCharacterId = character !== undefined ? character.id : undefined
      }
    },
    getters: {
      currentCharacter: state => state.CharacterModule.characters.find(character => character.id === state.currentCharacterId)
    },
    actions: {
      async loadFromStorage ({ dispatch, getters }) {
        const characterId = await localforage.getItem('currentCharacterId')
        await dispatch('changeCurrentCharacter', { id: characterId })

        await dispatch('CharacterModule/loadCharacters')

        const screen = await localforage.getItem('currentScreen')
        if (screen !== 'character' || getters.currentCharacter) {
          await dispatch('changeCurrentScreen', screen)
        }
      },
      async changeCurrentScreen ({ commit, state }, screen) {
        commit('CHANGE_CURRENT_SCREEN', { screen })
        await localforage.setItem('currentScreen', state.currentScreen)
      },
      async changeCurrentCharacter ({ commit, state }, character) {
        commit('CHANGE_CURRENT_CHARACTER', { character })
        await localforage.setItem('currentCharacterId', state.currentCharacterId)
      }
    },
    modules: {
      CharacterModule
    }
  })
}

export default createStore
