import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
  function Pixel(props){
    return(
      <button className="pixel" onclick={props.onColor}>
        {props.color}
      </button>
    )
  }
  class Masterpiece extends React.Component{
    makePlate(){
      const stackCount = this.props.WIDTH;
      const queueCount = this.props.LENGTH;
      const e = React.createElement;
      e("div", null, ()=>{
        for(let c = 0; c < stackCount; c++){
          e("div", {className:"board-row"}, (c)=>{
            for(let r = 0; r < queueCount; r++){
              return(
                <>
                {this.renderPixel([r, c], this.props.color)}
                </>
                )
            }
          })
        }
      })
    }
    renderPixel(location, color){
      <Pixel color={this.props.color}
      onClick={this.props.onColor(location, color)}/>
    }
    render(){
      const plate = this.makePlate();
      return (
        <div>
          {plate}
        </div>
      );
    }
  }

  class MuseumOfDigitalCupcake extends React.Component{
    constructor(props){
      super(props);

      const MAX_HISTORY=7;
      const LENGTH=7;
      const WIDTH=7;

      this.state={
        history : [{
          cake: Array(LENGTH*WIDTH).fill(null),
        }],
        stepNumber: 0,
        color: 0xFFFFFF,
      }
    }
    onColor(location, color){
      const index = flatDIndexOf(location);
      const history = this.props.history;
      const current = history[history.length-1];
      const piece = current.cake.slice();
      piece[index] = color;

      this.setState({
        history: history.concat([{
          cake: piece,
        }]),
        stepNumber: this.props.stepNumber+1,
      });
    }
    render(){
      return <Masterpiece 
      onClick={(location, color)=>{this.onColor(location, color)}}/>;
    }
  }
  // ========================================
  
  ReactDOM.render(
    <MuseumOfDigitalCupcake />,
    document.getElementById('root')
  );

  function flatDIndexOf(location, width, length){
    return (location.r - 1)*width + (location.c*length - 1);
  }