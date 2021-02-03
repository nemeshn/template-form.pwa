import React from 'react';
import PropTypes from 'prop-types';
import './img/avatars.png';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // this.props

  calcPositionX() {
    const { axisX, width } = this.props;
    return `${(axisX * width) * (-1)}px`;
  }

  calcPositionY() {
    const { axisY, height } = this.props;
    return `${(axisY * height) * (-1)}px`;
  }

  calcSize() {
    const { backgroundHeight } = this.props;
    return `auto ${backgroundHeight}px`;
  }

  acquireStyle() {
    const { file, width, height } = this.props;
    return {
      backgroundImage: `url(${file})`,
      backgroundPositionX: this.calcPositionX(),
      backgroundPositionY: this.calcPositionY(),
      backgroundSize: this.calcSize(),
      width: `${width}px`,
      height: `${height}px`,
      display: 'table',
      margin: '0 auto',
    };
  }

  render() {
    return (
      <div style={this.acquireStyle()} />
    );
  }
}
Image.propTypes = {
  axisX: PropTypes.number.isRequired,
  axisY: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  backgroundHeight: PropTypes.number.isRequired,
  file: PropTypes.string.isRequired,
};

export default Image;
