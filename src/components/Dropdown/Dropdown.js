import React from 'react'

const Dropdown = ({ bookID, handleShelfChange, book }) => {

	return (
		<div className="book-shelf-changer">
			<select onChange={(e) => handleShelfChange(e, bookID, book)}>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	)
}

export default Dropdown