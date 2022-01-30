import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Nav from './components/nav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Nav />,
  document.getElementById('root')
);

reportWebVitals();
