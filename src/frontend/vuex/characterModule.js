import localforage from 'localforage'

const characterTemplate = () => {
  const id = Date.now()
  return {
    id: id,
    name: '',
    race: '',
    class: '',
    abilities: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
  }
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    characters: []
  },
  mutations: {
    CREATE_CHARACTER (state) {
      state.characters.push(characterTemplate())
    },
    UPDATE_CHARACTER (state, {character, changeDelta}) {
      Object.assign(character, changeDelta)
    },
    REMOVE_CHARACTER (state, {character}) {
      const characterIndex = state.characters.indexOf(character)
      if (characterIndex > -1) {
        state.characters.splice(characterIndex, 1)
      }
    },
    LOAD_CHARACTERS (state, {characters}) {
      state.characters = characters
    }
  },
  actions: {
    async createCharacter ({commit, dispatch}) {
      commit('CREATE_CHARACTER')
      dispatch('saveCharacters')
    },
    async updateCharacter ({commit, dispatch}, {character, changeDelta}) {
      commit('UPDATE_CHARACTER', {character, changeDelta})
      dispatch('saveCharacters')
    },
    async removeCharacter ({commit, dispatch}, character) {
      commit('REMOVE_CHARACTER', {character})
      dispatch('saveCharacters')
    },
    async saveCharacters ({state}) {
      await localforage.setItem('characters', state.characters)
    },
    async loadCharacters ({commit}) {
      const characters = await localforage.getItem('characters')
      commit('LOAD_CHARACTERS', {characters})
    }
  }
}
