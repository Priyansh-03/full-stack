import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Component1 />, document.getElementById('Component1'));
ReactDOM.render(<Component2 />, document.getElementById('Component2'));
ReactDOM.render(<Component3 />, document.getElementById('Component3'));
