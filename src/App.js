import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './Components/Pages/SearchPage'
import HomePage from './Components/Pages/HomePage'
import GoBackButton from './Components/Shilfs/GoBackButton'

class BooksApp extends React.Component {
  // The Main State
  state = {
    books: [],
  }

  // setState For Show SearchPage and Back To the HomePage
  goToSearchPage =  e => this.setState({showSearchPage: e})

  // Api To get all books from the api server
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
    }

  //function to move book to another shelf
  moveShelf= (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then(resp => this.setState({books: resp}))
  }

  render() {
    return (
      <div className="app">
    
        <Route exact path={'/'}
          render={() => (
            <div>
              <HomePage addBooks={this.state.books} moveShelf={this.moveShelf} />
              <GoBackButton showSearchPage={this.goToSearchPage}/>
            </div>
          )}
        />

        <Route path={'/search'}
          render={() => <SearchPage 
            showSearchPage={this.goToSearchPage} 
            moveShelf={this.moveShelf}/>}
            addBooks={this.state.books}
        />

      </div>
    )
  }
}

export default BooksApp
