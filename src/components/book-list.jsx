import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BookList = ({ books, onDelete }) => (  
  <ul>{books.map(book => 
    <li key={ book.id }>
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