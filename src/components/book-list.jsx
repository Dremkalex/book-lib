import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

//Временные стили
const styles = {
  li: {
    margin: '8px',
    padding: '8px',
    listStyleType: 'none',
    border: '1px solid #000',
  }
}

const BookList = ({ books, onDelete }) => (  
  <ul style={ {paddingLeft: 0, width: '50%'} }>{books.map(book => 
    <li key={ book.id } style={ styles.li }>
      <Book {...book} onDelete={ () => onDelete(book.id)} />
    </li>)}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;