import React from 'react'
import BookList from '../../BookList/BookList'

const AllBooks = ({ allBooks }) => {
	return (
		<div className="books-grid">
			<BookList books={allBooks} />
		</div>
	)
}

export default AllBooks