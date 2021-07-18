import React from 'react'
import reactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <h4>Hello World</h4>
      <ul>
        <li>
          <a href='#'>Hello World </a>
        </li>
      </ul>
    </div>
  )
}

// This is happening in the backend
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hi World')
//   )
// }

reactDom.render(<Greeting />, document.getElementById('root'))
