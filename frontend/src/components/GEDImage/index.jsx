import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

export default function GEDImage(props) {
  const { genero } = props;
  return (
    <Image
      axisX={0}
      axisY={genero === 'm' ? 0 : 1}
      width={170}
      height={170}
      backgroundHeight={340}
      file="./img/avatars.png"
    />
  );
}
GEDImage.propTypes = {
  genero: PropTypes.string.isRequired,
};
