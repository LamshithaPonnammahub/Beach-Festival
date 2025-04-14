// import React from 'react';
// import { Link } from 'react-router-dom';

// const Tickets = () => (
//   <div className="container text-center mt-5">
//     <h2>Book Your Tickets</h2>
//     <p>Reserve your spot and join us at the beach!</p>
//     <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
//       <Link className="btn btn-info" to="/camping">Camping</Link>
//       <Link className="btn btn-warning" to="/lodging">Lodging</Link>
//       <Link className="btn btn-secondary" to="/map">View Map</Link>
//     </div>
//     <Link to="/home" className="d-block mt-3">Back to Home</Link>
//   </div>
// );

// export default Tickets;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tickets = () => {
  const [ticketOption, setTicketOption] = useState('');
  const [foodOption, setFoodOption] = useState('');

  const handleTicketOption = (option) => {
    setTicketOption(option);
  };

  const handleFoodOption = (option) => {
    setFoodOption(option);
  };

  const handleBookNow = () => {
    alert(`You have booked: ${ticketOption} with ${foodOption} option.`);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Book Your Tickets</h2>
      <p>Reserve your spot and join us at the beach! Choose your desired options below.</p>

      {/* Ticket Options */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <Link to="/camping">
          <button className="btn btn-info" onClick={() => handleTicketOption('Camping')}>Camping</button>
        </Link>
        <Link to="/lodging">
          <button className="btn btn-warning" onClick={() => handleTicketOption('Lodging')}>Lodging</button>
        </Link>
        <Link to="/map">
          <button className="btn btn-secondary" onClick={() => handleTicketOption('View Map')}>View Map</button>
        </Link>
      </div>

      {/* Food Options - Veg and Non-Veg */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <button className={`btn ${foodOption === 'Veg' ? 'btn-success' : 'btn-outline-success'}`} 
                onClick={() => handleFoodOption('Veg')}>
          Veg
        </button>
        <button className={`btn ${foodOption === 'Non-Veg' ? 'btn-success' : 'btn-outline-success'}`} 
                onClick={() => handleFoodOption('Non-Veg')}>
          Non-Veg
        </button>
      </div>

      {/* Book Now Button */}
      <div className="mt-4">
        <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
      </div>

      {/* Back to Home */}
      <Link to="/" className="d-block mt-3">Back to Home</Link>
    </div>
  );
};

export default Tickets;