import React from 'react';
import './assets/main.css';

import BusinessState from './context/business/BusinessState';

import Navbar from './components/layout/Navbar';
import BusinessCard from './components/layout/businessCard/BusinessCard';
import Contact from './components/layout/Contact';
import Product from './components/layout/Product';
import Service from './components/layout/Service';
import AddressCard from './components/layout/businessCard/AddressCard';

function App() {
  return (
    <BusinessState>
      <div id='BusinessRealtionshipManager'>
        <Navbar />
        <div className='flex bg-gray-400'>
          <div className='px-3 py-4'>
            <BusinessCard />
            <AddressCard />
          </div>
          <div className='block'>
            <Contact />
            <Product />
            <Service />
          </div>
        </div>
      </div>
    </BusinessState>
  );
}

export default App;
