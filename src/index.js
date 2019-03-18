import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Routes from './routes';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <Routes />
    </Router>
  </Provider>,

  document.querySelector('#root')
);
