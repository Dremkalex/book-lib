// core
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './button.css';

const Button = ({ onClick, label }) => (
  <button 
    className={ styles.button }
    onClick={ onClick }>
    { label }
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => null,
};

export default Button;