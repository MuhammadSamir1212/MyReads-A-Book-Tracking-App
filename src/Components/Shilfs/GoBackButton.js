import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class GoBackButton extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to={'/search'} className="open-search-button">Add a book</Link>
      </div>
    )
  }
}

export default GoBackButton;