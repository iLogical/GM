const calculateModifier = (stat) => {
  if(!stat) {
    return 0
  }
  if (stat < 5) {
    return '-4'
  }
  if (stat <= 5) {
    return '-3'
  }
  if (stat <= 7) {
    return '-2'
  }
  if (stat <= 9) {
    return '-1'
  }
  if (stat <= 11) {
    return '+0'
  }
  if (stat <= 13) {
    return '+1'
  }
  if (stat <= 15) {
    return '+2'
  }
  if (stat <= 17) {
    return '+3'
  }
  if (stat >= 18) {
    return '+4'
  }
}

export default {
  calculateModifier
}