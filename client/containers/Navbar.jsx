import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import Share from '../components/Share';
import cwlogo from '../assets/images/brand-white-transparent.png';

class CWNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShare: false
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.generateLink = this.generateLink.bind(this);
  }

  handleClose() {
    this.setState({ showShare: false });
  }

  handleShow() {
    this.setState({ showShare: true });
  }

  generateLink() {
    return (
      this.props.location.pathname === '/' ? 
      <Link to="/about" className="cw-navbar-link">About</Link> : 
      <Link to="/" className="cw-navbar-link">Home</Link>
    );
  }

  render() {
    const NavLink = this.generateLink();

    return (
      <div className="cw-navbar">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={cwlogo} alt="Charter Wars Logo" className="brand-logo" />
              </Link>
            </Navbar.Brand>
            <div className="navbar-toggle-wrapper">
              <Navbar.Toggle className="btn cw-navbar-toggle" />
            </div>
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <li role="presentation">
                {NavLink}
              </li>
              <li role="presentation" className="navbar-share">
                <Button className="cw-btn-transparent"
                  onClick={this.handleShow}>
                  Share
                </Button>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
        <Share show={this.state.showShare} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default withRouter(CWNavbar);