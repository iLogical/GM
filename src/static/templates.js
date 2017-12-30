const character = () => {
  const id = Date.now()
  return {
    id: id,
    name: '',
    race: '',
    class: '',
    level: 0,
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
  character
}