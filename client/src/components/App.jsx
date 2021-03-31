import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StackPage from './pages/stack/StackPage';
import QueuePage from './pages/queue/QueuePage';

export default function App() {
  return (
    <div className="container">
      <Router>
        <div id="content">
          <Navbar />
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/queue">
              <QueuePage />
            </Route>
            <Route path="/stack">
              <StackPage />
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
};
