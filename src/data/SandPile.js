import math from 'mathjs';

export function mkEmptyPile(width, height){
  return math.zeros(width, height);
}

export function mergePiles(p1, p2){
  return p1.clone().add(p2);
}

export function valToColor(v){
  switch(v){
    default:
    return '';
  }
}
