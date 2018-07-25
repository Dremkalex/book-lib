import React from 'react';

const SearchBar = ({ onChange, filter }) => (
  <div>
    <p>Filter books by title</p>
    <input value={ filter } onChange={ onChange } type="text"/>
  </div>
);

export default SearchBar;