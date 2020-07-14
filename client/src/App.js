import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Businesses from './pages/Businesses';
import './App.css';

function App() {
  return (
    <div id="BusinessRealtionshipManager">
      <div className="container-fluid router-body">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Businesses} />
              <Route exact path="/businesses" component={Businesses} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
