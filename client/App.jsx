import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Navbar from './containers/Navbar';
import Home from './containers/Home';
import About from './containers/About';

import './stylesheets/components/app.css';

const App = props => {
  return (
    <div className="application">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  )
};

export default App;