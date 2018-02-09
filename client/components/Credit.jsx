import React from 'react';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

const Credit = props => {
  return (
    <ListGroupItem>
      <Row>
        <Col xs={6}>
          <span>{props.title}</span>
        </Col>
        <Col xs={6} className="text-right">
          <span>
            <a href={props.url}>
              {props.name}
            </a>
          </span>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default Credit;