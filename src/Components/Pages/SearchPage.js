import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {search} from '../../BooksAPI'
import * as BooksAPI from '../../BooksAPI'
import Books from '../Shilfs/Books'

class SearchPage extends Component {

  //state for the search
  state = {
    books: [],
    query: "",
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState({books: resp}))
  }

  

  //handel onChange to get the books
  handelSearch = async e => {
    try{
      const query = e.target.value
      this.setState({query})

      if (query.trim()) {
        const results = await search(query)
        if(results.error){
          this.setState({books:[]})
        }else{
          this.setState({books: results})
        }
      }else {
        this.setState({books:[]})
      }
    }catch(error){
      console.log(error)
    }
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
            {this.state.books.length > 0 && this.state.books.map(book => {
              const selectedShelf = this.state.books.find(searchBook => searchBook.id === book.id)
              // here i have a problem i dont know why that didnt work, the books is not selected could be none but is didnt work
              if (selectedShelf) {
                book.shelf = selectedShelf.shelf
                
              }else{
                book.value.shelf ='none';
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