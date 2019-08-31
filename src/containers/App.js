import React, { Component } from 'react'
import * as BooksAPI from '../backend/BooksAPI'
import './App.css'
import Shelf from '../components/Shelf/Shelf'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import SearchPage from '../components/SearchPage/SearchPage'
import Page404 from '../components/Page404/Page404'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends Component {
	state = {
		books: [],
	}

	componentDidMount = () => {
		BooksAPI.getAll()
			.then(data => this.setState({ ...this.state, books: data }))
			.catch(e => console.log(e))
	}

	renderCorrectShelfOfBooks = (shelf) => {
		const books = this.state.books.filter(book => book.shelf === shelf)
		return (<Shelf books={books} handleShelfChange={this.handleShelfChange} />)
	}

	handleShelfChange = (book, e) => {
		book.shelf = e.target.value

		let newBooks = []

		BooksAPI.update(book, e.target.value)
			.then(data => {
				newBooks = this.state.books.filter(b => b.id !== book.id).concat(book)
				this.setState({...this.state, books: newBooks})
		})
		.catch(e => console.log(e))

	}

	render() {
		return (
			<div>
				<Switch>
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
					<Route 
					exact path="/search-books" 
					render={props => <SearchPage handleShelfChange={this.handleShelfChange} books={this.state.books} />} 
					/>
					<Route component={Page404} />
				</Switch>
			</div>
		)
	}
}

export default BooksApp
