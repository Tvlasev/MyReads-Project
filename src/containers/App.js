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
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount = () => {
  	BooksAPI.getAll()
    	.then(data => this.setState({...this.state, books: data}))
  } 

  render() {
    console.log(this.state)
    return (
    	<div>
         	<Route exact path="/" render={props => 
         		<div>
         			<Header />
            		<h2 className="bookshelf-title">Currently Reading</h2>
      				<Shelf books={this.state.books}/>
      				<h2 className="bookshelf-title">Want To Read</h2>
      				<Shelf books={this.state.books}/>
      				<h2 className="bookshelf-title">Read</h2>
      				<Shelf books={this.state.books}/>
        			<Button />
         		</div>
         	} />
         	<Route exact path="/search-books" component={SearchPage} />
		</div>
    )
  }
}

export default BooksApp
