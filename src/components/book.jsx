import React from 'react';
import TrashIcon from './trash-icon';

const Book = ({ img, title, author, descr, onDelete }) => (
  <div>
    <img src={ img } alt="book-img" />
    <h2>{ title }</h2>
    <h4>{ author }</h4>
    <p>{ descr }</p>
    <button onClick={ onDelete }>
      <TrashIcon />
    </button>
  </div>
);

export default Book;