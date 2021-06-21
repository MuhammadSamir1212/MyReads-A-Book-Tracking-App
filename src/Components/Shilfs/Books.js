import React, { Component } from 'react'

class Books extends Component {

  //this will handle onChange Event
  handleChange = (e) => this.props.moveShelf(this.props, e.target.value)

  render() {
    //clean up the props
    const {shelf, title, authors} = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})` 
            }} />
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Books;