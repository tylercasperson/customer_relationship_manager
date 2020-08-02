import React from 'react';
import './assets/main.css';

import Navbar from './components/layout/Navbar';
// import BusinessCard from './components/layout/BusinessCard';

function App() {
  return (
    <div id='BusinessRealtionshipManager'>
      <Navbar />
      <div className='container-fluid router-body'>
        {/* <BusinessCard /> */}
      </div>
    </div>
  );
}

export default App;
