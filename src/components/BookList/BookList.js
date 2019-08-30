import React from 'react'
import Book from '../Book/Book'
import PropTypes from 'prop-types'
import noBookCover from '../../images/no-book-cover.jpg'

const BookList = ({ books, handleShelfChange }) => {
  return (
    <div className="books-grid">
      {books.map(book => <Book
        books={books}
        key={book.id}
        book={book}
        bookCurrentShelf={book.shelf ? book.shelf : "none"}
        bookID={book.id}
        title={book.title}
        cover={book.imageLinks ? book.imageLinks.thumbnail : noBookCover}
        author={book.authors ? book.authors.map(author => `${author} `) : null}
        handleShelfChange={handleShelfChange}
      />)}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookList