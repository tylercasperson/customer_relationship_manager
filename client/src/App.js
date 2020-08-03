import React from 'react';
import './assets/main.css';

import Navbar from './components/layout/Navbar';
import BusinessCard from './components/layout/businessCard/BusinessCard';
import Contact from './components/layout/Contact';
import Product from './components/layout/Product';
import Service from './components/layout/Service';

function App() {
  return (
    <div id='BusinessRealtionshipManager'>
      <Navbar />
      <div className='flex bg-gray-400'>
        <div className='px-3 py-4'>
          <BusinessCard />
        </div>
        <div className='block'>
          <Contact />
          <Product />
          <Service />
        </div>
      </div>
    </div>
  );
}

export default App;
