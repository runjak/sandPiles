import math from 'mathjs';

export function mkEmptyPile(width, height){
  return math.zeros(width, height);
}

export function mergePiles(p1, p2){
  return p1.clone().add(p2);
}

export function addToPile(pile, x, y, amount){
  const currentSize = pile.size();
  const addPile = math.zeros(currentSize[0], currentSize[1]);
  math.subset(addPile, x, y, amount);
  return mergePiles(pile, addPile);
}

export function valToColor(v){
  switch(v){
    default:
    return '';
  }
}
