import {Record, fromJS, Set, List} from 'immutable';

const SandPileRecord = Record({
  width: 0,
  height: 0,
  data: List(), // [[Int]]
  lastChanged: new Set(), // [(Int, Int)]
  isStable: true
});

class SandPile extends SandPileRecord {
  addMultipleToPile(pointAmountTuples){
    //pointAmountTuples :: [[point, amount]…]
    var data = this.data;
    var lastChanged = this.lastChanged;
    pointAmountTuples.forEach((pa) => {
      const point = pa[0];
      const amount = pa[1];
      data = data.updateIn(
        point, 0, (sand) => {return sand + amount;});
      lastChanged = lastChanged.add(fromJS(point));
    });
    const isStable = !lastChanged.some((p) => {
      return data.getIn(p) >= 4;
    });
    return this.merge({data, isStable, lastChanged});
  }

  addToPile(point, amount){
    return this.addMultipleToPile([[point, amount]]);
  }

  getNeighbours(point){
    const x = point[0], y = point[1];
    const width = this.width, height = this.height;
    return [[x-1, y], [x, y-1], [x, y+1], [x+1, y]].filter((n) => {
      const nx = n[0], ny = n[1];
      return nx >= 0 && ny >= 0 && nx < width && ny < height;
    });
  }

  stabilize(){
    if(this.isStable){
      throw new Error("SandPile.stabilize called on a stable sand pile!");
    }
    const changes = [];
    this.lastChanged.toSeq().forEach((point) => {
      const sand = this.data.getIn(point);
      if(sand >= 4){
        const distribute = Math.floor(sand / 4);
        const keep = sand % 4;
        changes.push([point, (keep - sand)]);
        this.getNeighbours(point.toJS()).forEach((n) => {
          changes.push([n, distribute]);
        });
      }
    });
    return this.addMultipleToPile(changes);
  }

  resetLastChanged(){
    return this.merge({lastChanged: new Set()});
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
