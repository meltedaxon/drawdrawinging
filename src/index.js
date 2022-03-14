import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

const config = {
  plateWidth : 7,
  plateLength : 7,
  maxHistory :7,
};
  function Pixel(props){
    return(
      <button className="pixel" onClick={props.onColor}>
        {props.color}
      </button>
    )
  }
  class Masterpiece extends React.Component{
    renderPlate(){
      const result = [];
      for(let r = 0; r < config.plateLength; r++){
        result.push(<div key = {r} className = "board-row">
        {this.renderLine(r)}
        </div>)
      }
      return result;
    }
    renderLine(r){
      const result = [];

      for(let c = 0; c < config.plateWidth; c++){
        const key = r+","+c
        result.push(<span key = {key}>{this.renderPixel([r, c])}</span>)
      }
      return result;
    }

    renderPixel(location){
      const index= flatDIndexOf(location, config.plateWidth, config.plateLength)
      return(
      <Pixel color={this.props.cake[index]}
      onColor={()=>this.props.onColor(location)}/>
      )
    }
    
    render(){
      return (
        <div>
        {this.renderPlate()}
        </div>
      );
    }
  }

  class MuseumOfDigitalCupcake extends React.Component{
    constructor(props){
      super(props);

      this.state={
        history : [{
          cake: Array(config.plateLength*config.plateWidth).fill(null),
        }],
        stepNumber: 0,
        color: "#",
        
      }
    }
    handleColor(location){
      const index = flatDIndexOf(location,config.plateWidth, config.plateLength);
      const history = this.state.history;
      const current = history[history.length-1];
      const piece = current.cake.slice();

      piece[index] = this.state.color;

      this.setState({
        history: history.concat([{
          cake: piece,
        }]),
        stepNumber: this.props.stepNumber+1,
      });
    }
    render(){
      const history = this.state.history;
      const current = history[history.length-1];
      return (
      <div className = "museumOfDigitalCupcake">
        <div className = "museumOfDigitalCupcake-board">
          <Masterpiece 
          cake = {current.cake}
          onColor={(location)=>{this.handleColor(location)}}/>
        </div>
        <div className = "museumOfDigitalCupcake-info">

        </div>
      </div>
    )
    }
  }
  // ========================================
  
  ReactDOM.render(
    <MuseumOfDigitalCupcake />,
    document.getElementById('root')
  );

  function flatDIndexOf(location, width, length){
    const r = location[0]
    const c = location[1]
    return ((c+1) + (r*width))-1;
  }