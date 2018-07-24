import React, { Component } from 'react';
import books from './books'; // массив с книгами
import SearchBar from './search-bar'
import BookList from './book-list';
import { getVisibleBooks } from '../services/selectors';

export default class App extends Component {
  state = {
    books,
    filter: '',
  };

  changeFilter = (evt) => {
    this.setState({
      filter: evt.target.value,
    })      
  };

  deleteBook = (id) => {
    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== id)
    }))
  };

  render() {
    const { books, filter } = this.state;
    const visibleBooks = getVisibleBooks(books, filter);

    return (
      <div>
        <SearchBar value={ filter } onChange={ this.changeFilter } />
        <BookList books={ visibleBooks } onDelete={ this.deleteBook} />
      </div>      
    );
  }
}; 