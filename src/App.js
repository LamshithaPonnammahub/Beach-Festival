import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';
import Camping from './pages/Camping';
import Contact from './pages/Contact';
import Lodging from './pages/Lodging';
import Map from './pages/Map';
import Offers from './pages/Offers';
import Footer from './components/Footer';
import Mailbar from './pages/Mailbar';

const App = () => (
  <Router>
    <Mailbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tickets" element={<Tickets />} />
      <Route path="/Camping" element={<Camping />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Lodging" element={<Lodging />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Offers" element={<Offers />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;