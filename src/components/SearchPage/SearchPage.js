import React, { Component } from 'react'
import SearchField from './SearchField/SearchField'
import AllBooks from './AllBooks/AllBooks'
import * as BooksAPI from '../../backend/BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    allBooks: []
  }

  componentDidMount = () => {
    BooksAPI.search('R', 20)
      .then(data => this.setState({ ...this.state, allBooks: data }))
  }

  handleSearchInputChange = (e) => {
    this.setState({ ...this.state, query: e.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchField handleSearchInputChange={this.handleSearchInputChange} />
        <AllBooks handleShelfChange={this.props.handleShelfChange} allBooks={this.state.allBooks} />
      </div>
    )
  }
}

export default SearchPage