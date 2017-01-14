import React, {Component} from 'react';
import SandPileActions from '../data/SandPileActions';
import './SandPileView.css';

class SandPileView extends Component {
  componentDidMount(){
    this.updateCanvas();
  }

  componentDidUpdate(){
    var canvas = this.refs.canvas;
    SandPileActions.initSandPile(canvas.scrollWidth, canvas.srollHeight);
  }

  updateCanvas(){
    const ctx = this.refs.canvas.getContext('2d');
  }

  render(){
    return (<canvas className="canvas" ref="canvas" />);
  }
}

export default SandPileView;
