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

export function valToColor(v){
  switch(v){
    default:
    return '';
  }
}
