import {ReduceStore} from 'flux/utils';
import SandPileActionTypes from './SandPileActionTypes';
import SandPileDispatcher from './SandPileDispatcher';
import math from 'mathjs';

class SandPileStore extends ReduceStore {
  constructor(){
    super(SandPileDispatcher);
  }

  getInitialState(){
    return math.matrix([
      [0,0,0],
      [0,0,0],
      [0,0,0]]);
  }

  reduce(state, action){
    switch(action.type){
      case SandPileActionTypes.INIT_SANDPILE:
        return action.sandPile;

      case SandPileActionTypes.ADD_SANDPILE:
        return state.clone().add(action.sandPile);

      default:
        return state;
    }
  }
}

export default new SandPileStore();
