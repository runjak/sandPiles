import SandPileActionTypes from './SandPileActionTypes';
import SandPileDispatcher from './SandPileDispatcher';
import {mkEmptyPile} from './SandPile';

const Actions = {
  initSandPile(width, height){
    SandPileDispatcher.dispatch({
      type: SandPileActionTypes.INIT_SANDPILE,
      sandPile: mkEmptyPile(width, height)
    });
  },
  addSandPile(sandPile){
    SandPileDispatcher.dispatch({
      type: SandPileActionTypes.ADD_SANDPILE,
      sandPile
    });
  }
};

export default Actions;
