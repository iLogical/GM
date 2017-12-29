import Guid from 'guid'

const characterTemplate = {
  id: Guid.create(),
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

export default {
  characterTemplate
}