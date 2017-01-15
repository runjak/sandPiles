import React, {Component} from 'react';
import SandPileActions from '../data/SandPileActions';
import './SandPileView.css';

class SandPileView extends Component {
  componentDidMount(){
    var canvas = this.refs.canvas;
    SandPileActions.initSandPile(canvas.scrollWidth, canvas.scrollHeight);
  }

  componentDidUpdate(){
    this.updateCanvas();
  }

  updateCanvas(){
    const ctx = this.refs.canvas.getContext('2d');
  }

  onClick(event){
    SandPileActions.addRandomSandToSandPile(event.clientX, event.clientY);
  }

  render(){
    return <canvas className="canvas" ref="canvas" onClick={this.onClick} />;
  }
}

export default SandPileView;
