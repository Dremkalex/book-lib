// core
import React from 'react';

// components
import TrashIcon from './trash-icon';

import { getShortDescribe } from '../services/selectors';

// styles
import styles from './book.css';

const Book = ({ img, title, author, descr, onDelete }) => (
  <div className={ styles.book }>
    <img className={ styles.img } src={ img } alt="book-img" />
    <div className={ styles.content }>
      <h2>{ title }</h2>
      <h4>{ author }</h4>
      <p>{ getShortDescribe(descr) }</p>
      <button className={ styles.button } onClick={ onDelete }>
        <TrashIcon />
      </button>
    </div>
  </div>
);

export default Book;