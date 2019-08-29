import React from 'react'
import BookList from '../BookList/BookList'
import PropTypes from 'prop-types'

const Shelf = ({ books, handleShelfChange }) => {

  return (
    <div>
      <BookList books={books} handleShelfChange={handleShelfChange} />
    </div>
  )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default Shelf