import React from 'react'
import reactDom from 'react-dom'

import './index.css'

function BookList() {
  return (
    <section className='BookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Img />
      <Title />
      <Author />
    </article>
  )
}

const Img = () => (
  <img
    src='https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
)

const Title = () => (
  <h1>Ikigai: The Japanese secret to a long and Happy Life </h1>
)

const Author = () => <h4>Héctor García</h4>

reactDom.render(<BookList />, document.getElementById('root'))
