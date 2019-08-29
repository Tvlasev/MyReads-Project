import React from 'react'
import BookList from '../../BookList/BookList'

const AllBooks = ({ allBooks, handleShelfChange }) => {
	return (
		<div className="books-grid">
			<BookList handleShelfChange={handleShelfChange} books={allBooks} />
		</div>
	)
}

export default AllBooks