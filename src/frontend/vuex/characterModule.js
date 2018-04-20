import localforage from 'localforage'
import templates from '../../static/templates.js'

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    characters: []
  },
  mutations: {
    CREATE_CHARACTER(state) {
      state.characters.push(templates.character())
    },
    UPDATE_CHARACTER(state, { character, changeDelta }) {
      Object.assign(character, changeDelta)
    },
    UPDATE_CHARACTER_ABILITIES(state, { character, changeDelta }) {
      Object.assign(character.abilities, changeDelta)
    },
    REMOVE_CHARACTER(state, { character }) {
      const characterIndex = state.characters.indexOf(character)
      if (characterIndex > -1) {
        state.characters.splice(characterIndex, 1)
      }
    },
    LOAD_CHARACTERS(state, { characters }) {
      state.characters = characters || []
    }
  },
  actions: {
    async createCharacter({ commit, dispatch }) {
      commit('CREATE_CHARACTER')
      dispatch('saveCharacters')
    },
    async updateCharacter({ commit, dispatch }, { character, changeDelta }) {
      commit('UPDATE_CHARACTER', { character, changeDelta })
      dispatch('saveCharacters')
    },
    async updateCharacterAbilities({ commit, dispatch }, { character, changeDelta }) {
      commit('UPDATE_CHARACTER_ABILITIES', { character, changeDelta })
      dispatch('saveCharacters')
    },
    async removeCharacter({ commit, dispatch }, character) {
      commit('REMOVE_CHARACTER', { character })
      dispatch('saveCharacters')
    },
    async saveCharacters({ state }) {
      await localforage.setItem('characters', state.characters)
    },
    async loadCharacters({ commit }) {
      const characters = await localforage.getItem('characters')
      commit('LOAD_CHARACTERS', { characters })
    }
  }
}
