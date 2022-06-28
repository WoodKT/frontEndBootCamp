import './App.css';
import React from 'react';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="main">
          <h2 className='main-header'>React CRUD Operations</h2>
          <div>
            <Route path='/create' element={Create} />
          </div>
          <div style={{ marginTop: 20 }}>
              <Route path='/read' element={Read} />
          </div>
          <div>
            <Route path='/update' element={Update} />
          </div>
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;