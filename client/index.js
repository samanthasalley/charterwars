import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import App from './App';

import './stylesheets/styles.scss';

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', function () { return render(App) });
}