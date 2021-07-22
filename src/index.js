import React from 'react'
import reactDom from 'react-dom'

import './index.css'

function BookList() {
  return (
    <section className='BookList'>
      <Book />
    </section>
  )
}
const author = 'Héctor García'
const Book = () => {
  const title = 'Ikigai: The Japanese secret to a long and Happy Life'
  return (
    <article className='book'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>

      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 4}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}

reactDom.render(<BookList />, document.getElementById('root'))
