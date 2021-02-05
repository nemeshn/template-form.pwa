import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import GEDImage from '../GEDImage';

export default function GEDButton(props) {
  const { genero, selected, updateGenero } = props;

  return (
    <a
      className={selected ? 'gender-button selected-gender-button' : 'gender-button'}
      href="#!"
      onClick={(event) => updateGenero(event, genero)}
    >
      <GEDImage
        genero={genero}
      />
    </a>
  );
}
GEDButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  updateGenero: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
};
