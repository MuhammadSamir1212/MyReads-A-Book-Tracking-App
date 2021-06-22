import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Books from '../Shilfs/Books'

class SearchPage extends Component {

  //state for the search
  state = {
    searchBooks: [],
    query: "",
  }
  
  queryUpdate = (query) => {
    this.setState({query:query})
    this.updateSearch(query)
  }

  updateSearch = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchBooks) => {
        this.setState({searchBooks:searchBooks})
      })
    }else{
      this.setState({searchBooks: []})
    }
  }

  // handel onChange
  handelSearch = (e) => {
    this.queryUpdate(e.target.value)
  }

  render() {
    const {searchBooks} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            type="text" 
            placeholder="Search by title or author" 
            value={this.state.query} 
            onChange={this.handelSearch} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.length > 0 && searchBooks.map(book => {
              const selectedShelf = searchBooks.find(searchBook => searchBook.id === book.id)
              // here i have a problem i dont know why that didnt work, the books is not selected could be none but is didnt work
              if (selectedShelf) {
                book.shelf = selectedShelf.shelf
                
              }else{
                book.shelf ='none';
              }
              return <Books key={book.id} {...book} moveShelf={this.props.moveShelf}/>
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;