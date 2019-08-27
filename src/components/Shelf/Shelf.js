import React from 'react'
import BookList from '../BookList/BookList'

const Shelf = ({books}) => {
  
	return(
    	<div>
      		<BookList books={books}/>
      	</div>
    )
}

export default Shelf