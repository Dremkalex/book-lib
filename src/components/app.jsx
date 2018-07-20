import React from 'react';
import books from './books';
import BookList from './bookList';

const App = () => (
    <div>
        <BookList books={ books }/>
    </div>
)

export default App;