import React from 'react';
import './assets/main.css';

import Navbar from './components/layout/Navbar';
import BusinessCard from './components/layout/businessCard/BusinessCard';

function App() {
  return (
    <div id='BusinessRealtionshipManager'>
      <Navbar />
      <BusinessCard />
    </div>
  );
}

export default App;
