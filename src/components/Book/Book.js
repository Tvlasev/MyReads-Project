import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

const Book = ({title, cover, author}) => {
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
					<Dropdown />
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
      
export default Book