import React from 'react';
import PropTypes from 'prop-types';
// import Image from '../Image';
// import ButtonImage from '../ButtonImage';
import ManipularEvento from './ManipularEvento';

class ImageScroller extends React.Component {
  constructor(props) {
    super(props);
    const { elements, selected } = this.props;
    this.state = {
      manipularEvento: new ManipularEvento(
        elements.length,
        selected.index,
      ),
    };
  }

  obterSelecionado() {
    const { elements } = this.props;
    const { manipularEvento } = this.state;
    return elements[
      manipularEvento.index
    ];
  }
}
ImageScroller.propTypes = {
  elements: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ImageScroller;
