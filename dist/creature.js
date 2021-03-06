'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var sizeMultiplier = function sizeMultiplier(size) {
  switch (size) {
    case 'small':
      return 1;
      break;
    case 'medium':
      return 50;
      break;
    case 'large':
      return 100;
      break;
    default:
      return 1;
  }
};

var attack = function attack(size) {
  return function (attackPower) {
    return sizeMultiplier(size) * attackPower;
  };
};

var health = function health(size) {
  return sizeMultiplier(size) * 100;
};

var creature = function creature(size) {
  return {
    size: size,
    hp: health(size),
    attack: attack(size)
  };
};

exports.creature = creature;