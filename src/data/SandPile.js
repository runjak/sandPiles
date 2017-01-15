import math from 'mathjs';

export function mkEmptyPile(width, height){
  return math.zeros(width, height);
}

export function mergePiles(p1, p2){
  return math.add(p1.clone(), p2);
}

export function addToPile(pile, x, y, amount){
  const addPile = mkEmptyPile.apply(null, pile.size());
  math.subset(addPile, math.index(x, y), amount);
  return mergePiles(pile, addPile);
}

//const white = new Uint8ClampedArray([255, 255, 255]);
const white = new Uint8ClampedArray([0, 0, 0]);
const red = new Uint8ClampedArray([255, 0, 0]);
const green = new Uint8ClampedArray([0, 255, 0]);
const blue = new Uint8ClampedArray([0, 0, 255]);
export function sandToColor(c){
  switch(c){
    case 0:
    return white;
    case 1:
    return red;
    case 2:
    return green;
    default:
    console.log('Color for', c);
    return blue;
  }
}
