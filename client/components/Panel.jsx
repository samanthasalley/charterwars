import React from 'react';
import { Panel } from 'react-bootstrap';

const CWPanel = props => {
  return (
    <Panel id={props.id} defaultExpanded={props.expanded}>
      <Panel.Heading>
        <Panel.Title toggle>
          <h1>{props.title}</h1>
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          {props.content}
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  );
};

export default CWPanel;