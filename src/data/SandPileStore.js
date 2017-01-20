import {ReduceStore} from 'flux/utils';
import SandPileActionTypes from './SandPileActionTypes';
import SandPileDispatcher from './SandPileDispatcher';
import {mkEmptyPile} from './SandPile';

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

      case SandPileActionTypes.ADD_SAND_TO_SANDPILE:
        return state.addToPile(action.point, action.amount);

      default:
        return state;
    }
  }
}

export default new SandPileStore();
