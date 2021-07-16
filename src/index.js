import React from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

function Greeting(){
  return <h4>this is abhishek and this is my first component</h4>;
}

reactDom.render(<Greeting/>, document.getElementById('root'));