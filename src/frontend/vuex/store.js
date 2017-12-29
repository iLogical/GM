import CharacterModule from './characterModule'

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentScreen: 'splash',
    currentCharacterId: ''
  },
  mutations: {
    CHANGE_CURRENT_SCREEN (state, {newScreen}) {
      state.currentScreen = newScreen
    },
    CHANGE_CURRENT_CHARACTER (state, {character}) {
      state.currentCharacterId = character !== undefined ? character.id : undefined
    }
  },
  getters: {
    currentCharacter: state => state.CharacterModule.characters.find(character => character.id === state.currentCharacterId)
  },
  actions: {
    async loadFromStorage ({dispatch}) {
      await dispatch('CharacterModule/loadCharacters')
    },
    async changeCurrentScreen ({commit}, newScreen) {
      commit('CHANGE_CURRENT_SCREEN', {newScreen})
    },
    async changeCurrentCharacter ({commit}, character) {
      commit('CHANGE_CURRENT_CHARACTER', {character})
    }
  },
  modules: {
    CharacterModule
  }
}
