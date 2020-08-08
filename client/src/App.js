import React from 'react';
import './assets/main.css';

import AuthState from './context/auth/AuthState';
import BusinessState from './context/business/BusinessState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar';
import DisplayCard from './components/layout/businessCard/DisplayCard';
import Contact from './components/layout/Contact';
import Product from './components/layout/Product';
import Service from './components/layout/Service';

function App() {
  return (
    <AuthState>
      <BusinessState>
        <AlertState>
          <div id='BusinessRealtionshipManager'>
            <Navbar />

            <div className='flex bg-gray-400'>
              <div className='px-3 py-4'>
                <DisplayCard />
              </div>
              <div className='block'>
                <Contact />
                <Product />
                <Service />
              </div>
            </div>
          </div>
        </AlertState>
      </BusinessState>
    </AuthState>
  );
}

export default App;
