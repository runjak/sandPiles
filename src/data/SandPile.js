import {Record, fromJS, Set, List} from 'immutable';

const SandPileRecord = Record({
  width: 0,
  height: 0,
  data: List(), // [[Int]]
  lastChanged: new Set(), // [(Int, Int)]
  isStable: true
});

class SandPile extends SandPileRecord {
  addToPile(x, y, amount){
    const data = this.data.updateIn(
      [x, y], 0, (sand) => {return sand + amount;});
    const lastChanged = this.lastChanged.add(fromJS([x, y]));
    const isStable = !lastChanged.some((p) => {
      return data.getIn(p) >= 4;
    });
    return this.merge({data, isStable, lastChanged});
  }

  stabilize(){
  }
}

export default SandPile;

export function mkEmptyPile(width, height){
  var xs = new Array(width);
  for(var i = 0; i < xs.length; i++){
    xs[i] = new Array(height);
    xs[i].fill(0);
    xs[i] = fromJS(xs[i]);
  }
  return new SandPile({width, height, data: fromJS(xs)});
}

export function sandToColor(c){
  switch(c){
    case 0:
    return '#FFFFFF';
    case 1:
    return '#FF0000';
    case 2:
    return '#00FF00';
    case 3:
    return '#0000FF';
    default:
    return '#000000';
  }
}
