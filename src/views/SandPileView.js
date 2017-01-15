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
    this.props.sandPile.forEach((sand, index) => {
      const imageData = ctx.getImageData(index[0], index[1], 1, 1);
      const color = sandToColor(sand);
      if(imageData.data[0] !== color[0] ||
         imageData.data[1] !== color[1] ||
         imageData.data[2] !== color[2]){
        console.log('Setting color:', imageData.data, color);
        for(var i = 0; i < 3; i++){
          imageData.data[i] = color[i];
        }
        ctx.putImageData(imageData, index[0], index[1]);
      }
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
