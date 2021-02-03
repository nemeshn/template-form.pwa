import React from 'react';
import PropTypes from 'prop-types';

export default function Label(props) {
  const { valueInvalid, htmlFor, text } = props;
  const styles = {
    color: valueInvalid ? '#d50000' : '#444444',
  };

  return (
    <label
      style={styles}
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
}
Label.propTypes = {
  valueInvalid: PropTypes.bool.isRequired,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
