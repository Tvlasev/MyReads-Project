import React, { Component } from 'react'
import SearchField from './SearchField/SearchField'
import AllBooks from './AllBooks/AllBooks'
import * as BooksAPI from '../../backend/BooksAPI'

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
        books.length > 0
          ? this.setState({ allBooks: books, noResults: false })
          : this.setState({ allBooks: [], noResults: true });
      });

    } else this.setState({ allBooks: [], noResults: false });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchField handleSearchResults={this.handleSearchResults} handleSearchInputChange={this.handleSearchInputChange} />
        { this.state.noResults 
        ? (<h1>Sorry, No results</h1>) 
        : (<AllBooks handleShelfChange={this.props.handleShelfChange} allBooks={this.state.allBooks} />)
        }
      </div>
    )
  }
}

export default SearchPage