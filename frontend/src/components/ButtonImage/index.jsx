/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Image from '../Image';

export default function ButtonImage(props) {
  const { position } = props;
  const styled = {}; let index = 0;
  const tamanho = 30;

  if (position === 'pstRight') {
    styled.float = 'right'; index = 1;
  } else {
    styled.float = 'left'; index = 0;
  }
  const property = { ...props };
  delete property.position;

  return (
    <div
      style={styled}
      className="option-image-scroller"
      {...property}
    >
      <Image
        axisX={index}
        axisY={0}
        width={tamanho}
        height={tamanho}
        backgroundHeight={tamanho}
        file="img/buttons.png"
      />
    </div>
  );
}
ButtonImage.propTypes = {
  position: PropTypes.string.isRequired,
};
