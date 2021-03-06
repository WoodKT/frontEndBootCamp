import React from 'react';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <div className='main'>
        <NavBar/>
        <br/>
        <Route
          path="/"
          exact
          render={() => 
          <Create />}
        />
        <Route
          path="/read"
          exact
          render={() => 
          <Read />}
        />
        <Route path='/update' component={Update} />
        </div>
      </Router>
    </div>
  );
}

export default App;