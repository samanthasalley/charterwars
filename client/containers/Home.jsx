import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Blurb from '../components/Blurb';
import VideoContainer from './VideoContainer';

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
          url: 'https://player.vimeo.com/video/251223020?autoplay=1'
        },
        {
          name: 'Debate',
          tagline: 'The debate',
          url: 'https://player.vimeo.com/video/251223856?autoplay=1'
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
      return (
        <VideoContainer
          elementKey={i}
          type={el.name}
          url={el.url}
          tagline={el.tagline} />
      );
    });

    return (
      <div className="home" className="text-center">
        <Grid>
          <Row>
            <Col xsHidden md={4}></Col>
            <Col xsHidden md={4}>
              <h1>Charter Wars</h1>
              <h3>A Documentary Webseries</h3>
              {videos[0]}
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {videos[1]}
            </Col>
            <Col xs={12} md={6}>
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