import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home = () => (
  <div>
    <HeroSection />
    <div className="container text-center mt-5">
      <h1>Welcome to the Beach Festival!</h1>
      <p>Explore the vibrant experience with music, food, and fun by the sea.</p>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <Link className="btn btn-primary" to="/login">Login</Link>
        <Link className="btn btn-outline-secondary" to="/offers">Offers</Link>
        <Link className="btn btn-success" to="/tickets">Book Tickets</Link>
      </div>
    </div>
  </div>
);

export default Home;
