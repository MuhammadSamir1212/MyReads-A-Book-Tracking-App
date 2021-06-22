import React from 'react'
import {Link} from 'react-router-dom'

function GoBackButton() {
  return (
    <div className="open-search">
      <Link to={'/search'} className="open-search-button">Add a book</Link>
    </div>
  )
}

export default GoBackButton;