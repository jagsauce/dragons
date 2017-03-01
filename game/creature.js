import _ from 'lodash'

const sizeMultiplier = size => {
  switch (size) {
    case 'small':
      return 1
      break;
    case 'medium':
      return 50
      break;
    case 'large':
      return 100
      break;
    default:
      return 1
  }
}

const attack = size => attackPower => sizeMultiplier(size) * attackPower

const creature = size => {
  return {
    size,
    hp:health(size),
    attack: attack(size)
  }
}

const health = size => sizeMultiplier(size) * 100

export  {
  creature
}
