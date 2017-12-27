import localforage from 'localforage'
import { character } from '../../static/templates'

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: { 
    characters: []
  },
  mutations: {
    CREATE_CHARACTER (state) {
      state.characters.push(character())
    }
  },
  actions: {
  }
}
