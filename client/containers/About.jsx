import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import CWPanel from '../components/Panel';
import Credit from '../components/Credit';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [
        {
          title: 'Creator/Writer/Co-Director',
          name: 'Sivahn Barsade',
          url: '#creator'
        },
        {
          title: 'Co-Director/Editor',
          name: 'Rachel Kessler',
          url: 'http://www.rchlksslr.com/'
        },
        {
          title: 'Animation',
          name: 'Jocie Fifield',
          url: 'https://jocie-fifield.squarespace.com/work/'
        },
        {
          title: 'Original Music',
          name: 'Daniel Schwartz',
          url: 'https://twitter.com/dschwrtz'
        },
        {
          title: 'Graphic Design',
          name: 'Felipe Gedeon',
          url: '#'
        },
        {
          title: 'Website Design',
          name: 'Rebecca Plotnick',
          url: 'https://www.rrplotnick.com/'
        },
        {
          title: 'Software Engineer',
          name: 'Samantha Salley',
          url: 'http://samanthasalley.com'
        },
        {
          title: 'Merchandise Design',
          name: 'Emily Ulrich',
          url: '#'
        },
      ]
    };

    this.subscribe = this.subscribe.bind(this);
    this.generateShareContent = this.generateShareContent.bind(this);
    this.generateCreditsContent = this.generateCreditsContent.bind(this);
    this.generateCreatorContent = this.generateCreatorContent.bind(this);
    this.generateAffiliationsContent = this.generateAffiliationsContent.bind(this);
  }

  generateCreditsContent() {
    const credits = this.state.team.map((el, i) => {
      return (
        <Credit
          title={el.title}
          name={el.name}
          url={el.url}
          key={i}
        />
      );
    });
    credits.push(
      <ListGroupItem key={credits.length}>
        <Row>
          <Col xs={12} className="text-center">
            <p>
              Charter Wars would not have been possible without the generous support of our 76 Kickstarter Backers.<br />
              Your interest and confidence in the project provided a constant source of motivation over the past 3 years. Thank you.
        </p>
          </Col>
        </Row>
      </ListGroupItem>
    );
    return credits;
  }

  generateAffiliationsContent() {
    return (
      <div>
        <p>
          Charter Wars is not currently affiliated with, nor funded by any of the following groups: <br />
          Charter School Networks, Individual Charter Schools, Teachers Unions, other Labor Unions, Advocacy Groups, Foundations, Political Parties or their PACs.
        </p>
        <p>
          Charter Wars features views and opinions from individuals who are affiliated with various organizations.<br />
          The affiliations, views, and opinions of the individuals featured in Charter Wars do not reflect any endorsement by the filmmakers.
        </p>
        <p>
          Charter Wars was funded through a <a href="https://www.kickstarter.com/projects/charterwars/charter-wars- inside-philadelphias-biggest-debate" target="_blank">Kickstarter Campaign</a> conducted in 2015. The individuals who contributed to the Kickstarter Campaign had no involvement with the direction or production of Charter Wars.
        </p>
      </div>
    );
  }

  generateCreatorContent() {
    return (
      <div>
        <p>
          Sivahn grew up outside of Philadelphia, a few blocks from the border between West Philadelphia and the suburb Lower Merion. She attended Lower Merion High School and graduated during the hey-day of the Education Reform Movement. Her first summer job was stuffing donor gift baskets with Waiting for Superman DVDs. Over the next three years Sivahn worked for various organizations closely aligned with the no-excuses charter school movement and encountered first-hand the polarized views about charter schools. This sparked a 6 year investigation into the charter school debate, spanning the political spectrum from Diane Ravitch to Mike Petrilli. During that time, Sivahn graduated from Williams College with degrees in Political Economy and Psychology and a job offer at a management consulting firm with a robust education practice. She deferred that job, moved into her parent’s basement, and convinced the talented Rachel Kessler to fly to Philadelphia and film a documentary about the charter school debate.
        </p>
        <p>
          Today, Sivahn lives with her fiancé in Los Angeles and no longer works in education, or management consulting. She hopes that Charter Wars continues to evoke questions and encourage nuance in this multi-faceted debate.
        </p>
      </div>
    );
  }

  generateShareContent() {
    return (
      <div>
        <h3>Screenings</h3>
        <p>
          Full length version of Charter Wars is available upon request for live screenings.<br />
          Contact <a href="mailto:info@charterwars.org" target="_top">info@charterwars.org</a> for more information.
        </p>
        <h3>Stay Updated</h3>
        <p>
          Join the Charter Wars community:
        </p>
        <input id="sub-email" type="text" placeholder="email address" />
        <input id="sub-name" type="text" placeholder="name" />
        <Button onClick={this.subscribe}>Subscribe!</Button>
      </div>
    );
  }

  subscribe(e) {
    console.log('subscribe');

    const emailValidation = new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "i");

    const email = document.getElementById('sub-email').value;
    const name = document.getElementById('sub-name').value;

    console.log(`email is: ${email}, and name is: ${name}`);

    if (!email || !name || !emailValidation.test(email)) return;

    const newSubscriber = { email, name };

    console.log('newSubscriber: ', newSubscriber);

    fetch('http://localhost:8080/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSubscriber)
    })
      .then(response => response.json())
      .then(res => {
        if (res.err) return console.log('error creating new subscriber', res.err);
        console.log('success creating new sub', res.msg);
      })
      .catch(err => console.log('error creating new subscriber', err));
  }

  render() {
    return (
      <div className="about">
        <Grid>
          {/* SHARE */}
          <CWPanel
            id="share"
            key="share"
            expanded={true}
            title="Share"
            content={this.generateShareContent()}
          />

          {/* CREDITS */}
          <CWPanel
            id="credits"
            key="credits"
            expanded={true}
            title="Credits"
            content={this.generateCreditsContent()}
          />

          {/* AFFILIATIONS / DISCLAIMERS */}
          <CWPanel
            id="affiliations"
            key="affiliations"
            expanded={true}
            title="Affiliations"
            content={this.generateAffiliationsContent()}
          />

          {/* ABOUT THE CREATOR */}
          <CWPanel
            id="creator"
            key="creator"
            expanded={false}
            title="Creator"
            content={this.generateCreatorContent()}
          />
        </Grid>
      </div>
    );
  }
};

export default About;