import React from 'react';
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import PlaceholderState from './context/placeholder/PlaceholderState';
import BusinessState from './context/business/BusinessState';
import IndustryState from './context/industry/IndustryState';
import ServiceState from './context/service/ServiceState';
import ContactState from './context/contact/ContactState';
import EventState from './context/event/EventState';
import EventSpecialState from './context/eventSpecial/EventSpecialState';

import NoteState from './context/note/NoteState';
import AlertState from './context/alert/AlertState';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Businesses from './components/pages/Businesses';

import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <AuthState>
      <PlaceholderState>
        <BusinessState>
          <IndustryState>
            <ServiceState>
              <ContactState>
                <EventState>
                  <EventSpecialState>
                    <NoteState>
                      <AlertState>
                        <Router>
                          <div id='BusinessRealtionshipManager'>
                            <Navbar />
                            <Switch>
                              <Route exact path='/' component={Businesses} />
                              <Route exact path='/login' component={Login} />
                              <Route
                                exact
                                path='/register'
                                component={Register}
                              />
                            </Switch>
                          </div>
                        </Router>
                      </AlertState>
                    </NoteState>
                  </EventSpecialState>
                </EventState>
              </ContactState>
            </ServiceState>
          </IndustryState>
        </BusinessState>
      </PlaceholderState>
    </AuthState>
  );
}

export default App;
