import React from 'react'
import BookList from '../../BookList/BookList'
import PropTypes from 'prop-types'

const AllBooks = ({ allBooks, handleShelfChange }) => {
	return (
		<div className="books-grid">
			<BookList handleShelfChange={handleShelfChange} books={allBooks} />
		</div>
	)
}

AllBooks.propTypes = {
	allBooks: PropTypes.array.isRequired,
	handleShelfChange: PropTypes.func.isRequired
}

export default AllBooks