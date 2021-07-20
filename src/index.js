import React from 'react'
import reactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <Person></Person>
      <Message></Message>
    </div>
  )
}

const Person = () => <h4>Abhishek Chandra</h4>

const Message = () => {
  return <p>This is my intoduction</p>
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
