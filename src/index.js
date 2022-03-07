import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './app/store';
import CurrencyContext from './services/CurrencyContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <CurrencyContext>
        <App />
      </CurrencyContext>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);