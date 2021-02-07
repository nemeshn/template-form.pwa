import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { main, onClickButton, text } = props;
  const classes = main ? 'pure-button pure-button-primary' : 'pure-button';
  const styled = {
    float: main ? 'right' : 'left',
    backgroundColor: main ? '#2c80b9' : '#e6e6e6',
    width: '120px',
    height: '38px',
    marginTop: '10px',
    boxSizing: 'border-box',
  };

  return (
    <button
      type="button"
      className={classes}
      style={styled}
      onClick={onClickButton}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  main: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
