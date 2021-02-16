import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import ButtonImage from '../ButtonImage';
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
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  onTouchStart(event) {
    const { clientX } = event.targetTouches[0].clientX;
    const { manipularEvento } = this.state;
    manipularEvento.iniciar(clientX);
    this.setState({ manipularEvento });
  }

  onTouchMove(event) {
    const { clientX } = event.targetTouches[0].clientX;
    const { manipularEvento } = this.state;
    manipularEvento.mover(clientX);
    this.setState({ manipularEvento });
  }

  onTouchEnd() {
    const { onChange } = this.props;
    const { manipularEvento } = this.state;
    manipularEvento.atualizarToque();
    this.setState({ manipularEvento }, () => {
      onChange(this.acquireSelecting());
    });
  }

  acquireSelecting() {
    const { elements } = this.props;
    const { manipularEvento } = this.state;
    return elements[
      manipularEvento.index
    ];
  }

  renderLiImage(entry, index) {
    const { axisY, file } = this.props;
    // let iAxisY = axisY ? axisY : 0;
    const iAxisY = axisY || 0;

    return (
      <li
        style={{
          zIndex: '-1',
          position: 'absolute',
          paddingTop: '8px',
          marginLeft: `${index * 140}px`,
        }}
        key={index + entry.toString()}
      >
        <Image
          axisX={entry.index}
          axisY={iAxisY}
          width={140}
          height={140}
          backgroundHeight={280}
          file={file}
        />
      </li>
    );
  }

  renderUlImages() {
    const { elements } = this.props;
    const { manipularEvento } = this.state;
    const tempMS = manipularEvento.toqueEmExecucao ? '100ms' : '800ms';

    const styled = {
      margin: '0',
      padding: '0',
      position: 'relative',
      width: `${elements.length * 140}px`,
      left: `${manipularEvento.left}px`,
      listStyleType: 'none',

      WebkitTransitionDuration: tempMS, /* Safari e Chrome */
      MsTransitionDuration: tempMS, /* IE */
      MozTransitionDuration: tempMS, /* Firefox */
      OTransitionDuration: tempMS, /* Opera */
      transitionDuration: tempMS, /* Nativa do W3C */
    };

    const listElements = elements.map(
      (entry, index) => this.renderLiImage(entry, index),
    );

    return (
      <ul style={styled}>
        {listElements}
      </ul>
    );
  }

  static renderSelected() {
    return (
      <span
        style={{
          float: 'left',
          width: '140px',
          height: '160px',
          marginLeft: '42px',
          backgroundColor: '#00C853',
          position: 'relative',
          zIndex: -2,
        }}
      />
    );
  }

  renderButtonImage(position) {
    const { onChange } = this.props;
    const { manipularEvento } = this.state;
    return (
      <ButtonImage
        position={position}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        onClick={(event) => {
          event.preventDefault();
          let { index } = manipularEvento;
          if (position === 'pstLeft') {
            index += -1;
          } else {
            index += 1;
          }
          manipularEvento.definirIndex(index);
          manipularEvento.atualizarClique();
          this.setState({ manipularEvento }, () => {
            onChange(this.acquireSelecting());
          });
        }}
      />
    );
  }

  renderImageScroller() {
    const styled = {
      width: '310px',
      height: '160px',
      overflow: 'hidden',
      boxSizing: 'border-box',
      borderWidth: '1px',
      borderBottomWidth: '0',
      borderStyle: 'solid',
      borderColor: '#cccccc',
      borderRadius: '5px',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
    };

    return (
      <div
        style={styled}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        {this.renderButtonImage('pstLeft')}
        {ImageScroller.renderSelected()}
        {this.renderUlImages()}
        {this.renderButtonImage('pstRight')}
      </div>
    );
  }

  renderizarLabel() {
    const styled = {
      boxSizing: 'border-box',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderTopWidth: '0',
      borderColor: '#cccccc',
      borderRadius: '5px',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      backgroundColor: '#cccccc',
      color: '#444444',
      fontSize: '20px',
      textAlign: 'center',
      padding: '5px',
      width: '310px',
    };

    return (
      <div style={styled}>
        {this.acquireSelecting().toString()}
      </div>
    );
  }

  render() {
    return (
      <>
        Oi
      </>
    );
  }
}
ImageScroller.propTypes = {
  elements: PropTypes.arrayOf.isRequired,
  selected: PropTypes.number.isRequired,
  axisY: PropTypes.number.isRequired,
  file: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageScroller;
