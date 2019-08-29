import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchField = ({ handleSearchResults }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" 
              placeholder="Search by title or author" 
              onChange={(e) => handleSearchResults(e)} 
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

SearchField.propTypes = {
  handleSearchResults: PropTypes.func.isRequired
}

export default SearchField