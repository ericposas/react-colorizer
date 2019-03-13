import React from 'react';
import ReactDOM from 'react-dom';

let heading = document.querySelector('#colorHeading')

export class ColorLabel extends React.Component {

  render(){
    let heading = {
      color: 'black',
      fontSize: '30px',
      fontWeight: 'bold'
    }
    let style = {
      color: this.props.color
    }
    return(
      <div style={heading}>
        <span>Colorizer</span>:&nbsp;
        <span style={style}>{this.props.color}</span>
      </div>
    )
  }

}
