import React from 'react';
import PropTypes from 'prop-types';
import GEDButton from '../GEDButton';

export default function GEDSelector(props) {
  const { valueInvalid, genero, updateGenero } = props;
  const feminino = genero === 'f';
  const masculino = genero === 'm';
  const cor = valueInvalid ? '#d50000' : '#cccccc';
  const styled = {
    boxSizing: 'border-box',
    border: `1px solid ${cor}`,
    borderRadius: '5px',
    padding: '3px',
    paddingBottom: 0,
  };

  return (
    <div style={styled}>
      <GEDButton
        selected={masculino}
        genero="m"
        updateGenero={updateGenero}
      />
      <GEDButton
        selected={feminino}
        genero="f"
        updateGenero={updateGenero}
      />
    </div>
  );
}
GEDSelector.propTypes = {
  valueInvalid: PropTypes.bool.isRequired,
  updateGenero: PropTypes.func.isRequired,
  genero: PropTypes.string.isRequired,
};
