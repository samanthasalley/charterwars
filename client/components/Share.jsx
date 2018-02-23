import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';

const Share = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Share CharterWars</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FacebookShareButton
          url="https://charterwars.org"
          quote="Check out #CharterWars documentary!!"
          hashtag="#education">
          <FontAwesomeIcon icon={faFacebookF} />
        </FacebookShareButton>
        <TwitterShareButton
          url="https://charterwars.org"
          title="Check out #CharterWars documentary!!"
          hashtags={["education", "debate"]}>
          <FontAwesomeIcon icon={faTwitter} />
        </TwitterShareButton>
        <LinkedinShareButton
          url="https://charterwars.org"
          title="Check out #CharterWars!"
          description="A non-biased documentary on the charter school debate in Philadelphia">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </LinkedinShareButton>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Share;