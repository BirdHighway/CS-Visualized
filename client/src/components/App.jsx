import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
};
