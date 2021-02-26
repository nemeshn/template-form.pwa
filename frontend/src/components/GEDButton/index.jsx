import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import GEDImage from '../GEDImage';

export default function GEDButton(props) {
  const { genero, selected, updateGenero } = props;

  return (
    <button
      type="button"
      className={selected ? 'ged-button selected-ged-button' : 'ged-button'}
      onClick={(event) => updateGenero(event, genero)}
    >
      <GEDImage
        genero={genero}
      />
    </button>
  );
}
GEDButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  updateGenero: PropTypes.func.isRequired,
  genero: PropTypes.string.isRequired,
};
