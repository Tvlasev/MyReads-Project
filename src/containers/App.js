import React, { Component } from 'react'
//import * as BooksAPI from '../backend/BooksAPI'
import './App.css'
import Shelf from '../components/Shelf/Shelf'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import SearchPage from '../components/SearchPage/SearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    showSearchPage: false,
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  render() {
    return (
    	<div>
         	<Route exact path="/" render={props => 
         		<div>
         			<Header />
            		<h2 className="bookshelf-title">Currently Reading</h2>
      				<Shelf />
      				<h2 className="bookshelf-title">Want To Read</h2>
      				<Shelf />
      				<h2 className="bookshelf-title">Read</h2>
      				<Shelf />
        			<Button />
         		</div>
         	} />
         	<Route exact path="/search-books" component={SearchPage} />
		</div>
    )
  }
}

export default BooksApp
