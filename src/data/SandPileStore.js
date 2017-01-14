import {ReduceStore} from 'flux/utils';
import SandPileActionTypes from './SandPileActionTypes';
import SandPileDispatcher from './SandPileDispatcher';
import {mkEmptyPile, mergePiles} from './SandPile';
import math from 'mathjs';

class SandPileStore extends ReduceStore {
  constructor(){
    super(SandPileDispatcher);
  }

  getInitialState(){
    return mkEmptyPile(3, 3);
  }

  reduce(state, action){
    switch(action.type){
      case SandPileActionTypes.INIT_SANDPILE:
        return action.sandPile;

      case SandPileActionTypes.ADD_SANDPILE:
        return mergePiles(state, action.sandPile);

      default:
        return state;
    }
  }
}

export default new SandPileStore();
