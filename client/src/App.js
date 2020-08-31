import React from 'react';
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import BusinessState from './context/business/BusinessState';
import IndustryState from './context/industry/IndustryState';
import ServiceState from './context/service/ServiceState';
import ContactState from './context/contact/ContactState';
import AlertState from './context/alert/AlertState';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Businesses from './components/pages/Businesses';

import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <AuthState>
      <BusinessState>
        <IndustryState>
          <ServiceState>
            <ContactState>
              <AlertState>
                <Router>
                  <div id='BusinessRealtionshipManager'>
                    <Navbar />
                    <Switch>
                      <PrivateRoute exact path='/' component={Businesses} />
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/register' component={Register} />
                    </Switch>
                  </div>
                </Router>
              </AlertState>
            </ContactState>
          </ServiceState>
        </IndustryState>
      </BusinessState>
    </AuthState>
  );
}

export default App;
