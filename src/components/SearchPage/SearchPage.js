import React, { Component } from 'react'
import SearchField from './SearchField/SearchField'
import AllBooks from './AllBooks/AllBooks'
import * as BooksAPI from '../../backend/BooksAPI'
import PropTypes from 'prop-types'

class SearchPage extends Component {
  state = {
    query: '',
    allBooks: [],
    noResults: false
  }

  handleSearchResults = e => {
    const query = e.target.value;
    this.setState({ ...this.state, query });

    if (query) {
      BooksAPI.search(query, 20).then(books => {
        if(query === this.state.query){
          if(books.length > 0 && this.props.books.length > 0){
            for(let i=0; i < books.length; i++){
              this.props.books.find(book => book.id === books[i].id ? books[i].shelf = book.shelf : null)
            }

            this.setState({ allBooks: books, noResults: false })
          }else{

            this.setState({ allBooks: [], noResults: true })
          }
        }
      });

    } else this.setState({ allBooks: [], noResults: false });
  };

  render() {
    return (
      <div>
        <SearchField handleSearchResults={this.handleSearchResults} handleSearchInputChange={this.handleSearchInputChange} />
        { this.state.noResults ? (<h1 style={{ textAlign: "center" }}>Sorry, no results found</h1>) : null }
        <AllBooks handleShelfChange={this.props.handleShelfChange} allBooks={this.state.allBooks} />
      </div>
    )
  }
}

SearchPage.propTypes = {
  handleShelfChange: PropTypes.func.isRequired
}

export default SearchPage