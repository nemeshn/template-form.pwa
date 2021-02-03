import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { valueInvalid, placeholder, ...rest } = props;
  const styles = {
    borderColor: valueInvalid ? '#d50000' : '#cccccc',
    backgroundColor: valueInvalid ? '#ffcdd2' : '#ffffff',
    width: placeholder ? '100%' : '200px',
  };

  // const property = { ...props };
  delete rest.valueInvalid;
  // {...props}

  return (
    <input
      type="text"
      style={styles}
      {...{ placeholder }}
    />
  );
}
Input.propTypes = {
  valueInvalid: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};
