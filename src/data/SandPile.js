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

export function sandToColor(v){
  switch(v){
    case 0:
    return [255, 255, 255];
    case 1:
    return [255, 0, 0];
    case 2:
    return [0, 255, 0];
    default:
    return [0, 0, 255];
  }
}
