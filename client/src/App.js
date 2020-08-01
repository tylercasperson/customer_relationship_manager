import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div id='BusinessRealtionshipManager'>
      <Navbar />
      <div className='container-fluid router-body'>
        <h1>Customer Relationship Manager</h1>
      </div>
    </div>
  );
}

export default App;
