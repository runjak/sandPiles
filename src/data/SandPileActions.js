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
  addRandomSandToSandPile(x, y){
    SandPileDispatcher.dispatch({
      type: SandPileActionTypes.ADD_SAND_TO_SANDPILE,
      point: [x, y],
      amount: Math.floor(Math.random() * 1000)
    });
  }
};

export default Actions;
