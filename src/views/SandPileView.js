import React, {Component} from 'react';
import SandPileActions from '../data/SandPileActions';
import {sandToColor} from '../data/SandPile';
import './SandPileView.css';

class SandPileView extends Component {
  componentDidMount(){
    var canvas = this.refs.canvas;
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
    SandPileActions.initSandPile(canvas.width, canvas.height);
  }

  componentDidUpdate(){
    this.updateCanvas();
  }

  updateCanvas(){
    const sandPile = this.props.sandPile;
    const ctx = this.refs.canvas.getContext('2d');
    var lastColor = null;
    sandPile.lastChanged.forEach((index) => {
      const sand = sandPile.data.getIn(index);
      const color = sandToColor(sand);
      if(color !== lastColor){
        ctx.fillStyle = color;
        lastColor = color;
      }
      ctx.fillRect(index[0], index[1], 5, 5);
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
