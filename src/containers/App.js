import React, { Component } from 'react'
import * as BooksAPI from '../backend/BooksAPI'
import './App.css'
import Shelf from '../components/Shelf/Shelf'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import SearchPage from '../components/SearchPage/SearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
	state = {
		books: [],
	}

	componentDidMount = () => {
		BooksAPI.getAll()
			.then(data => this.setState({ ...this.state, books: data }))
	}

	renderCorrectShelfOfBooks = (shelf) => {
		const books = this.state.books.filter(book => book.shelf === shelf)
		return (<Shelf books={books} handleShelfChange={this.handleShelfChange} />)
	}

	handleShelfChange = (e, bookID, book) => {
		console.log(e.target.value, "\nbook id: ", bookID, "\nBook: ", book)
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<Route exact path="/" render={props =>
					<div className="bookshelf">
						<Header />
						<h2 className="bookshelf-title">Currently Reading</h2>
						{this.renderCorrectShelfOfBooks("currentlyReading")}
						<h2 className="bookshelf-title">Want To Read</h2>
						{this.renderCorrectShelfOfBooks("wantToRead")}
						<h2 className="bookshelf-title">Read</h2>
						{this.renderCorrectShelfOfBooks("read")}
						<Button />
					</div>
				} />
				<Route exact path="/search-books" render={props => <SearchPage handleShelfChange={this.handleShelfChange} books={this.state.books} />} />
			</div>
		)
	}
}

export default BooksApp
