import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Blurb from '../components/Blurb';
import VideoContainer from './VideoContainer';

import cityImg from '../assets/images/city-icon.png';
import debateImg from '../assets/images/debate-icon.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [
        {
          name: 'Intro',
          tagline: 'What is Charter Wars?',
          url: 'https://player.vimeo.com/video/251221132?autoplay=1'
        },
        {
          name: 'City',
          tagline: 'The people and city behind the debate',
          url: 'https://player.vimeo.com/video/251223020?autoplay=1',
          photo: cityImg
        },
        {
          name: 'Debate',
          tagline: 'The debate',
          url: 'https://player.vimeo.com/video/251223856?autoplay=1',
          photo: debateImg
        }
      ],
      showBlurb: false,
    };

    this.handleBlurbClose = this.handleBlurbClose.bind(this);
  }

  componentDidMount() {
    const cachedShowBlurb = localStorage.getItem('cachedShowBlurb');
    if (!cachedShowBlurb) this.setState({ showBlurb: true });
  }

  handleBlurbClose() {
    localStorage.setItem('cachedShowBlurb', JSON.stringify(true));
    this.setState({ showBlurb: false });
  }

  render() {
    const videos = this.state.videos.map((el, i) => {
      const btnColor = i === 2 ? 'light' : 'dark';
      const photo = el.photo ? el.photo : null;
      return (
        <VideoContainer
          elementKey={i}
          type={el.name}
          url={el.url}
          tagline={el.tagline} 
          btnColor={btnColor}
          photo={photo}
        />
      );
    });

    return (
      <div className="home" className="text-center">
        <Grid fluid>
          <Row className="top-content">
            <Col xs={12} className="home-header text-center">
              <h1>Charter Wars</h1>
              <h3>A Documentary Webseries</h3>
              {videos[0]}
            </Col>
          </Row>
          <Row className="home-content">
            <Col xs={12} md={6} className="column">
              {videos[1]}
            </Col>
            <Col xs={12} md={6} className="column">
              {videos[2]}
            </Col>
          </Row>
        </Grid>
        <Blurb show={this.state.showBlurb} handleClose={this.handleBlurbClose} />
      </div>
    )
  }
}

export default Home;