import math from 'mathjs';

export function mkEmptyPile(width, height){
  return math.zeros(width, height);
}

export function mergePiles(p1, p2){
  const p3 = p1.clone()
  math.add(p3, p2);
  return p3;
}

export function addToPile(p1, x, y, amount){
  const p2 = p1.clone();
  p2.set([x, y], amount + p1.get([x, y]));
  return p2
}

export function sandToColor(c){
  switch(c){
    case 0:
    return '#FFFFFF';
    case 1:
    return '#FF0000';
    case 2:
    return '#00FF00';
    default:
    return '#0000FF';
  }
}
