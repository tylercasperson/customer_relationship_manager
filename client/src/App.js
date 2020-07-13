import React from 'react';
import logo from './logo.svg';
import './App.css';
import businesses from '../../utils/API';
import BusinessCard from '../src/components/BusinessCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BusinessCard 
        businessName={businesses[0].businessName}
        // phoneNumber={bus}
        // address={}
        // city={}
        // state={}
        // zip={}
        // notes={}
      />
    </div>
  );
}

export default App;
