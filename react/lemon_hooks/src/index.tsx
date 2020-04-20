// import "./app.css";
// console.log('welcome');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from './hello';

ReactDOM.render(
  <HelloComponent userName="北走"/>,
  document.getElementById('root')
)