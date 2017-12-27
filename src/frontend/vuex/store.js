import CharacterModule from './characterModule'

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  actions: {
    async loadFromStorage ({ dispatch }) {
    }
  },
  modules: {
    CharacterModule
  }
}
