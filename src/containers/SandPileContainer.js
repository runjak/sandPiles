import React, {Component} from 'react';
import {Container} from 'flux/utils';
import SandPileView from '../views/SandPileView';
import SandPileStore from '../data/SandPileStore';

class SandPileContainer extends Component {
  static getStores(){
    return [SandPileStore];
  }

  static calculateState(){
    return {sandPile: SandPileStore.getState()};
  }

  render(){
    return <SandPileView sandPile={this.state.sandPile} />;
  }
}



export default Container.create(SandPileContainer);
