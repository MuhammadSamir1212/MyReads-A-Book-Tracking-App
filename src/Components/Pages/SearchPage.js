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

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  // handel onChange
  handelSearch = (e) => {
    this.queryUpdate(e.target.value)
  }

  render() {
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

            {this.state.searchBooks.map(searchBooks => {
              searchBooks.shelf = 'none'
              this.state.books.map(book => (
                book.id === searchBooks.id ? searchBooks.shelf = book.shelf : ''
              ))
              return (
                <li key={searchBooks.id}>
                  <Books book={searchBooks} {...searchBooks} moveShelf={this.props.moveShelf} />
                </li>
              )
            })}
            {this.state.searchBooks.length === 0 && <h1 style={{textAlign:"center"}}>No Search Result</h1>}
            
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;