import React, { Component } from 'react'
import Books from './Books'

class Shelf extends Component {

  render() {

    //clean up the props
    const {moveShelf, title, books} = this.props

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
}

export default Shelf;