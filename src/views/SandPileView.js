import React, {Component} from 'react';
import SandPileActions from '../data/SandPileActions';
import {sandToColor} from '../data/SandPile';
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
    var lastColor = null;
    this.props.sandPile.forEach((sand, index) => {
      const color = sandToColor(sand);
      if(color !== lastColor){
        ctx.fillStyle = color;
        lastColor = color;
      }
      ctx.fillRect(index[0], index[1], 1, 1);
    });
  }

  onClick(event){
    SandPileActions.addRandomSandToSandPile(event.clientX, event.clientY);
  }

  render(){
    return <canvas className="canvas" ref="canvas" onClick={this.onClick} />;
  }
}

export default SandPileView;
