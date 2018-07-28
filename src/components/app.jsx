// core
import React, { Component } from 'react';

// styles
import '../index.css'
import styles from './app.css';

// unique id generator
import v4 from 'uuid/v4';

// services
import { getVisibleBooks } from '../services/selectors';

// components
import books from './books'; // sourse books array
import SearchBar from './search-bar';
import BookEditor from './book-editor';
import BookList from './book-list';


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
      <div className={ styles.wrapper }>
        <aside className={ styles.aside }>
          <SearchBar value={ filter } onChange={ this.changeFilter } />
          <BookEditor onSubmit={ this.addBook } />
        </aside>
        <main className={ styles.main }>
          <BookList books={ visibleBooks } onDelete={ this.deleteBook} />
        </main>
      </div>      
    );
  }
}; 