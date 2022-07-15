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

// https://v5.reactrouter.com/web/api/Hooks
// https://arunkantpant.medium.com/getting-started-with-react-apis-mock-servers-and-routing-b97b88898077
// https://www.geeksforgeeks.org/reactjs-keys/