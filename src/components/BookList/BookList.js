import React from 'react'
import Book from '../Book/Book'

const BookList = ({ books, handleShelfChange }) => {
  return (
    <div className="books-grid">
      {books.map(book => <Book
        books={books}
        key={book.id}
        book={book}
        bookID={book.id}
        title={book.title}
        cover={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null}
        author={book.atuthors ? book.authors.map(author => author) : null}
        handleShelfChange={handleShelfChange}
      />)}
    </div>
  )
}

export default BookList