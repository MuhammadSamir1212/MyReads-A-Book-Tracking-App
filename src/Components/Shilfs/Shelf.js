import React from 'react'
import Books from './Books'

function Shelf (props) {

  //clean up the props
  const {moveShelf, title, books} = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

          {books && books.map(book =>
            <Books key={book.id} {...book} moveShelf={moveShelf}/>
          )}

        </ol>      
      </div>
    </div>
  )
}

export default Shelf;