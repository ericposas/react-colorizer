import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Colorizer} from './components/Colorizer.jsx';

const target = document.querySelector('#container');

ReactDOM.render(
  <Colorizer/>,
  target
)
