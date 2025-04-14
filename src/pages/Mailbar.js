import React from 'react';
import { Link } from 'react-router-dom';

const Mailbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">BeachFest</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/tickets">Tickets</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/offers">Offers</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/map">Map</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/camping">Camping</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/lodging">Lodging</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Mailbar;