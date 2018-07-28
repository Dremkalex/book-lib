// core
import React, { Component } from 'react';

// components
import Button from './button';

// styles
import styles from './book-editor.css'

export default class BookEditor extends Component {
  state = {
    title: '',
    img: '',
    author: '',
    descr: '',
  };

  handleChange = (evt) => {
    const name = evt.target.name;
    this.setState({      
      [name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newBook = this.state;
    const isEmptyValue = Object.values(newBook).some(value => value.trim() === '');
    
    if (isEmptyValue) {
      alert("Some required field is empty");
      return;
    }
    
    this.props.onSubmit(newBook);

    this.setState({
      title: '',
      img: '',
      author: '',
      descr: '',
    });
  }

  render() {
    const { title, img, author, descr } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } className={ styles.form } >
        <label className={ styles.label }>
          Title
          <input 
            type="text"
            value={ title }
            name="title"
            onChange={ this.handleChange }
            className={ styles.input } />
        </label>
        <label className={ styles.label }>
          Image link
          <input type="text"
            value={ img }
            name="img"
            onChange={ this.handleChange }            
            className={ styles.input }
            list="https://fakeimg.pl/313x475/?text=Book&font=lobster" />
        </label>
        <label className={ styles.label }>
          Author
          <input type="text"
            value={ author }
            name="author"
            onChange={ this.handleChange }
            className={ styles.input } />
        </label>
        <label className={ styles.label }>
          Description
          <textarea 
            value={ descr }
            name="descr"
            onChange={ this.handleChange }
            className={ styles.textarea } />
        </label>
        <Button className={ styles.button } label="Add book" />
      </form>
    )
  }
};