/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { valueInvalid, placeholder } = props;
  const property = { ...props };
  const styled = {
    borderColor: valueInvalid ? '#d50000' : '#cccccc',
    backgroundColor: valueInvalid ? '#ffcdd2' : '#ffffff',
    width: placeholder ? '100%' : '200px',
  }; delete property.valueInvalid;

  return (
    <input
      type="text"
      style={styled}
      {...property}
    />
  );
}
Input.propTypes = {
  valueInvalid: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};
