import React from 'react';
import ReactDOM from 'react-dom/client'; //remove client?
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>//,
//  document.getElementById('root') //added
);