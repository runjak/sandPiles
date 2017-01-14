import SandPileActionTypes from './SandPileActionTypes';
import SandPileDispatcher from './SandPileDispatcher';

const Actions = {
  initSandPile(sandPile){
    SandPileDispatcher.dispatch({
      type: SandPileActionTypes.INIT_SANDPILE,
      sandPile
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
