import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ handleShelfChange, book }) => {

	return (
		<div className="book-shelf-changer">
			<select onChange={(e) => handleShelfChange(book, e)}>
				<option value="move">Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	)
}

Dropdown.propTypes = {
	book: PropTypes.object.isRequired,
	handleShelfChange: PropTypes.func.isRequired
}

export default Dropdown