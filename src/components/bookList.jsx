import React from 'react';
import Book from './book';

const BookList = ({ books }) => (
    <div>
        <ul>{books.map(book => 
        <Book 
            key={ book.id }
            img={ book.img }
            title={ book.title }
            author={ book.author }
            descr={ book.descr } />)}
            {/* // <li key={ book.id }>
            //     <img src={ book.img } alt="book-img" />
            //     <h2>{ book.title }</h2>
            //     <h4>{ book.author }</h4>
            //     <p>{ book.descr}</p>
            // </li>)} */}
        </ul>
    </div>
);

export default BookList;