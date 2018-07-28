// core
import React from 'react';

// styles
import styles from './search-bar.css'

const SearchBar = ({ onChange, filter }) => (
  <div className={ styles.searchBar }>
    <label className={ styles.label }>
      Filter books by title
      <input className={ styles.input } value={ filter } onChange={ onChange } type="text"/>
    </label>
  </div>
);

export default SearchBar;