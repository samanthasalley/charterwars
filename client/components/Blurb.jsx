import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Blurb = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>What is CharterWars?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Charter Wars is not currently affiliated with, nor funded by any of the following groups: <br />
          Charter School Networks, Individual Charter Schools, Teachers Unions, other Labor Unions, Advocacy Groups, Foundations, Political Parties or their PACs.
        </p>
        <p>
          Charter Wars features views and opinions from individuals who are affiliated with various organizations. The affiliations, views, and opinions of the individuals featured in Charter Wars do not reflect any endorsement by the filmmakers.
        </p>
        <p>
          Charter Wars was funded through a <a href="https://www.kickstarter.com/projects/charterwars/charter-wars-inside-philadelphias-biggest-debate" target="_blank">Kickstarter Campaign</a> conducted in 2015. The individuals who contributed to the Kickstarter Campaign had no involvement with the direction or production of Charter Wars.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Got It!</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Blurb;