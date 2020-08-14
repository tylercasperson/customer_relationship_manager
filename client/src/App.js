import React from 'react';
import './assets/main.css';

import AuthState from './context/auth/AuthState';
import BusinessState from './context/business/BusinessState';
import AlertState from './context/alert/AlertState';

import Businesses from './components/pages/Businesses';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <AuthState>
      <BusinessState>
        <AlertState>
          <div id='BusinessRealtionshipManager'>
            <Navbar />
          </div>
          <Businesses />
        </AlertState>
      </BusinessState>
    </AuthState>
  );
}

export default App;
