import React from 'react';

const Book = ({ img, title, author, descr, onDelete }) => (
  <div>
    <img src={ img } alt="book-img" />
    <h2>{ title }</h2>
    <h4>{ author }</h4>
    <p>{ descr }</p>
    <button onClick={ onDelete }>Delete</button>
  </div>
);

export default Book;