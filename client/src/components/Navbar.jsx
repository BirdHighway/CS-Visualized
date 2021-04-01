import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/"
        className="navbar-brand" >
        Home
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/about"
            className="nav-link">
            About
          </NavLink>
          <NavLink to="/queue"
            className="nav-link">
              Queue
          </NavLink>
          <NavLink to="/stack"
            className="nav-link">
            Stack
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
