import React from 'react'
import Book from '../Book/Book'

const BookList = ({books, handleShelfChange}) => {
	return(
      <div className="books-grid">
      	{books.map(book => <Book 
     					   	 key={book.id}
							 bookID={book.id}
						   	 title={book.title} 
						   	 cover={book.imageLinks.thumbnail} 
						   	 author={book.authors.map(author => author)}
							 handleShelfChange={handleShelfChange}
						   />)}
      </div>
    )
}

export default BookList