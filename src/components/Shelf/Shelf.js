import React from 'react'
import BookList from '../BookList/BookList'

const Shelf = ({ books, handleShelfChange }) => {

  return (
    <div>
      <BookList books={books} handleShelfChange={handleShelfChange} />
    </div>
  )
}

export default Shelf