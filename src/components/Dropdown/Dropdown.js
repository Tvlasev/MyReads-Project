import React from 'react'

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

export default Dropdown