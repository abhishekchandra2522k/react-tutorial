import React from 'react'
import reactDom from 'react-dom'

import './index.css'
const books = [
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
    title: 'Ikigai: The Japanese secret to a long and Happy Life',
    author: 'Héctor García',
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },
]

function BookList() {
  return (
    <section className='BookList'>
      {books.map((book) => {
        return <Book book={book} />
      })}
    </section>
  )
}
const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

reactDom.render(<BookList />, document.getElementById('root'))
