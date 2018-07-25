import React, { Component } from 'react';
import books from './books'; // sourse books array
import v4 from 'uuid/v4'; // unique id generator
import SearchBar from './search-bar';
import BookEditor from './book-editor';
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

  addBook = (newBook) => {
    const book = {
      id: v4(),
      ...newBook,
    };

    this.setState(prevState => ({
      books: [
        book,
        ...prevState.books
      ], 
    }));
  };

  render() {
    const { books, filter } = this.state;
    const visibleBooks = getVisibleBooks(books, filter);

    return (
      <div>
        <SearchBar value={ filter } onChange={ this.changeFilter } />
        <BookEditor onSubmit={ this.addBook }/>
        <BookList books={ visibleBooks } onDelete={ this.deleteBook} />
      </div>      
    );
  }
}; 