const character = () => {
  const id = Date.now()
  return {
    id: id,
    name: '',
    race: '',
    class: '',
    level: 0,
    abilities: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    }
  }
}

export default {
  character
}