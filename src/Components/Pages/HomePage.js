import React, { Component } from 'react'
import Shelf from '../Shilfs/Shelf'

class HomePage extends Component {
  render() {

    //getting the data from api server
    const addBooks = this.props.addBooks;

    const currentlyReading = addBooks.filter(book => book.shelf === "currentlyReading")
    const wantToRead = addBooks.filter(book => book.shelf === "wantToRead")
    const read = addBooks.filter(book => book.shelf === "read")

    //clean up the props
    const {moveShelf} = this.props

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
}

export default HomePage;