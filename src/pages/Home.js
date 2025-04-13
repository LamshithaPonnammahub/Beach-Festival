import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import OffersSection from '../components/OffersSection';
import TicketForm from '../components/TicketForm';
import Lodging from './Lodging';
import Camping from './Camping';
import Contact from './Contact';


const Home = () => {
  // Log when the Home component is mounted
  useEffect(() => {
    console.log("Home component mounted");
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div>
      <HeroSection />
      <OffersSection />
      <TicketForm />
      <Lodging />
      <Camping />
      <Contact />
    </div>
  );
};

export default Home;
