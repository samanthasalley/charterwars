import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import cwlogo from '../assets/images/brand-white-transparent.png';
import '../stylesheets/components/navbar.css';

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

const CWNavbar = props => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={cwlogo} alt="Charter Wars Logo" className="brand-logo" />
          </Link>
        </Navbar.Brand>
        <div className="navbar-toggle-wrapper">
          <Navbar.Toggle className="btn csx-btn-light csx-navbar-toggle" />
        </div>
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="navbar-nav nav navbar-right">
          <li role="presentation" className="navbar-icon">
            <Link to="/about">About</Link>
          </li>
          <li role="presentation" className="navbar-icon">
            <FacebookShareButton
              url="https://charterwars.org"
              quote="Check out #CharterWars documentary!!"
              hashtag="#education">
              <FontAwesomeIcon icon={faFacebookF} />
            </FacebookShareButton>
          </li>
          <li role="presentation" className="navbar-icon">
            <TwitterShareButton
              url="https://charterwars.org"
              title="Check out #CharterWars documentary!!"
              hashtags={["education", "debate"]}>
              <FontAwesomeIcon icon={faTwitter} />
            </TwitterShareButton>
          </li>
          <li role="presentation" className="navbar-icon">
            <LinkedinShareButton
              url="https://charterwars.org"
              title="Check out #CharterWars!"
              description="A non-biased documentary on the charter school debate in Philadelphia">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </LinkedinShareButton>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CWNavbar;