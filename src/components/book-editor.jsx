import React, { Component } from 'react';

//Временные стили
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    padding: 16,
  },
  label: {
    marginBottom: 16,
  },
  input: {
    width: '100%',
  },
  button: {
    cursor: 'pointer',
    padding: '4px 8px',
  },
};

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
      [name]: evt.target.value.trim(),
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newBook = this.state;
    const isEmptyValue = Object.values(newBook).some(value => value === '');
    
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
      <form onSubmit={ this.handleSubmit } style={ styles.form }>
        <label style={ styles.label }>
          Title
          <input 
            type="text"
            value={ title }
            name="title"
            onChange={ this.handleChange }
            style={ styles.input } />
        </label>
        <label style={ styles.label }>
          Image link
          <input type="text"
            value={ img }
            name="img"
            onChange={ this.handleChange }
            style={ styles.input } />
        </label>
        <label style={ styles.label }>
          Author
          <input type="text"
            value={ author }
            name="author"
            onChange={ this.handleChange }
            style={ styles.input } />
        </label>
        <label style={ styles.label }>
          Description
          <input type="text"
            value={ descr }
            name="descr"
            onChange={ this.handleChange }
            style={ styles.input } />
        </label>
        <button style={ styles.button }>Add book</button>
      </form>
    )
  }
};