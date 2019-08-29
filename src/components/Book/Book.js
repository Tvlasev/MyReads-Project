import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import PropTypes from 'prop-types'

const Book = ({title, cover, author, bookID, handleShelfChange, books, book}) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
					<Dropdown books={books} book={book} bookID={bookID} handleShelfChange={handleShelfChange}/>
					</div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{author}</div>
                  </div>
              </li>
            </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }

  Book.propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    bookID: PropTypes.string,
    author: PropTypes.array,
    cover: PropTypes.string
  }
      
export default Book