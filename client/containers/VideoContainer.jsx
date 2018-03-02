import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/fontawesome-free-solid';

import '../stylesheets/components/videocontainer.css';


class VideoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    const type = this.props.type.toLowerCase();
    const btnColor = this.props.btnColor;

    const photoShow = !this.props.photo ? { 'display': 'none' } : {};

    return (
      <div className={`cw-video cw-video-${type}`}>
        <div className="video-image-container" style={photoShow}>
          <img className="video-image"
            src={this.props.photo} 
            alt={`${type} image`} />
        </div>
        <div className="btn-container">
          <button className={`btn cw-btn-transparent cw-play cw-play-${btnColor}`}
            onClick={this.handleShow}>
            <div className="cw-play-icon">
              <FontAwesomeIcon icon={faPlay} size="2x" />
            </div>
          </button>
        </div>
        <span className="cw-video-tagline">{this.props.tagline}</span>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.tagline}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="video-wrapper">
              <iframe src={this.props.url} width="100%" height="100%"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen="true">
              </iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Done</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default VideoContainer;