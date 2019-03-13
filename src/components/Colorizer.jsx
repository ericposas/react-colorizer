import React from 'react';
import {ColorLabel} from './ColorLabel.jsx';

const prevColors = ['white'];

export class Colorizer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      index: 0,
      prevColors:[],
      color:'',
      bgColor:'white'
    }
    this.colorValue = this.colorValue.bind(this)
    this.setNewColor = this.setNewColor.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.incrementIndex = this.incrementIndex.bind(this)
    this.decrementIndex = this.decrementIndex.bind(this)
  }

  handleKeyPress(e){
    if(e.key == 'ArrowUp'){
      this.incrementIndex()
    }
    if(e.key == 'ArrowDown'){
      this.decrementIndex()
    }
  }

  decrementIndex(){
    if((this.state.index > 0) &&
       this.state.prevColors[this.state.index]){
      this.setState({
        index: this.state.index-1,
        bgColor: this.state.prevColors[this.state.index-1]
      })
      console.log(`current index: ${this.state.index-1}, color: ${this.state.prevColors[this.state.index-1]}`)
    }
  }

  incrementIndex(){
    if((this.state.index < prevColors.length-1) &&
       this.state.prevColors[this.state.index]){
      this.setState({
        index: this.state.index+1,
        bgColor: this.state.prevColors[this.state.index+1]
      })
      console.log(`current index: ${this.state.index+1}, color: ${this.state.prevColors[this.state.index+1]}`)
    }
  }

  colorValue(e){
    this.setState({
      color: e.target.value
    })
  }

  setColor(){
    prevColors.push(this.state.color)
    this.setState({
      index: prevColors.length-1,
      prevColors: prevColors,
      bgColor: this.state.color
    })
    this._input.focus()
    this._input.value = '';
  }

  setNewColor(e){
    this.setColor()
    e.preventDefault() //prevents us from "submitting" to another page or reloading
  }

  render(){
    let squareStyle = {
      backgroundColor: this.state.bgColor
    }
    return(
      <div className="colorArea">
        <ColorLabel color={this.state.bgColor}/>
        <div style={squareStyle} className="colorSquare"></div>
        <form onSubmit={this.setNewColor}>
          <input
            ref={elt=>{this._input=elt}}
            onKeyDown={this.handleKeyPress}
            onChange={this.colorValue}
            placeholder="Enter a color value"></input>
          <button type="submit">go</button>
        </form>
      </div>
    )
  }

}
