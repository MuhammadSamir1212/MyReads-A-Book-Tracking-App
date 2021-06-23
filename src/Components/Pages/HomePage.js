import React from 'react'
import Shelf from '../Shilfs/Shelf'

function HomePage (props) {
 
  //getting the data from api server
   const addBooks = props.addBooks;

  const currentlyReading = addBooks.filter(book => book.shelf === "currentlyReading")
  const wantToRead = addBooks.filter(book => book.shelf === "wantToRead")
  const read = addBooks.filter(book => book.shelf === "read")

  //clean up the props
  const {moveShelf} = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title="Currently Reading" books={currentlyReading} moveShelf={moveShelf} />
          <Shelf title="Want to Read" books={wantToRead} moveShelf={moveShelf} />
          <Shelf title="Read" books={read} moveShelf={moveShelf} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;