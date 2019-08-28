import React from 'react'
import { Link } from 'react-router-dom'

const SearchField = ({handleSearchInputChange}) => {
	return(
    	<div className="search-books">
           <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(e) => handleSearchInputChange(e)}/>
              </div>
            </div>
            <div className="search-books-results">
          <ol className="books-grid"></ol>
      		</div>
        </div>
    )
}

export default SearchField