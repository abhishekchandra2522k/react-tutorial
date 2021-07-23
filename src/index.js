import React from 'react'
import reactDom from 'react-dom'

import './index.css'

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
  title: 'Ikigai: The Japanese secret to a long and Happy Life',
  author: 'Héctor García',
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/518bm5DN-VS._AC_SX184_.jpg',
  title: 'Malibu Rising : A Novel',
  author: 'Taylor Jenkins Reid',
}

function BookList() {
  return (
    <section className='BookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

reactDom.render(<BookList />, document.getElementById('root'))
