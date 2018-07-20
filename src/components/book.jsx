import React from 'react';

const Book = ({ key, img, title, author, descr }) => (
    <li>
        <img src={ img } alt="book-img" />
        <h2>{ title }</h2>
        <h4>{ author }</h4>
        <p>{ descr }</p>
    </li>
)

export default Book;