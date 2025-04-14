import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lodging = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFood, setSelectedFood] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleRoomSelection = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleFoodSelection = (foodOption) => {
    setSelectedFood(prevFood =>
      prevFood.includes(foodOption)
        ? prevFood.filter(item => item !== foodOption)
        : [...prevFood, foodOption]
    );
  };

  const handleServiceSelection = (serviceOption) => {
    setSelectedServices(prevServices =>
      prevServices.includes(serviceOption)
        ? prevServices.filter(item => item !== serviceOption)
        : [...prevServices, serviceOption]
    );
  };

  const handleAddToCart = () => {
    if (selectedRoom) {
      const newCartItem = {
        room: selectedRoom,
        food: selectedFood,
        services: selectedServices,
        price: calculatePrice(selectedRoom),
      };
      setCart([...cart, newCartItem]);
      alert("Added to cart!");
    } else {
      alert("Please select a room first!");
    }
  };

  const calculatePrice = (room) => {
    let price = 0;
    switch (room) {
      case 'Standard Room':
        price = 120;
        break;
      case 'Deluxe Room':
        price = 150;
        break;
      case 'Suite':
        price = 200;
        break;
      case 'Garden View Room':
        price = 100;
        break;
      case 'Ocean View Room':
        price = 130;
        break;
      case 'Private Villa':
        price = 180;
        break;
      case 'Standard Tent':
        price = 40;
        break;
      case 'Luxury Tent':
        price = 70;
        break;
      case 'Glamping Tent':
        price = 100;
        break;
      default:
        price = 0;
    }

    // Adding price based on food options selected
    if (selectedFood.includes('Buffet Breakfast')) price += 20;
    if (selectedFood.includes('Beachside BBQ')) price += 30;
    if (selectedFood.includes('Luxury Dinner')) price += 50;
    if (selectedFood.includes('All-Inclusive Package')) price += 100;

    // Adding price based on services selected
    if (selectedServices.includes('Campfire Experience')) price += 15;
    if (selectedServices.includes('Beach Sports Rental')) price += 25;

    return price;
  };

  const handleBooking = () => {
    if (!bookingDate || !paymentMethod) {
      alert("Please select a booking date and payment method.");
    } else {
      alert("Booking confirmed!");
      setShowBookingOptions(false);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Lodging Options</h2>
      <p>Comfortable stay nearby for the perfect getaway. Choose from our luxurious rooms, food options, and exciting additional services!</p>

      <div className="row mt-4">
        {/* Beachfront Hotel */}
        <div className="col-md-4 d-flex">
          <div className="card h-100 w-100">
            <img
              src="/images/Beach side.png"
              className="card-img-top"
              alt="Beachfront Hotel"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Beachfront Hotel</h5>
              <p className="card-text">Enjoy luxurious amenities with a stunning view of the beach.</p>
              <p><strong>Price:</strong> $120/night</p>
              <div className="mt-auto">
                <h6>Choose Your Stay:</h6>
                <select className="form-control mb-2" onChange={handleRoomSelection}>
                  <option value="">Select a room</option>
                  <option value="Standard Room">Standard Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Suite">Suite</option>
                </select>
                <button className="btn btn-info btn-block mb-2" onClick={handleAddToCart}>Add to Cart</button>
                <h6>Food Options:</h6>
                <button
                  className={`btn ${selectedFood.includes('Buffet Breakfast') ? 'btn-success' : 'btn-outline-success'} mx-2`}
                  onClick={() => handleFoodSelection('Buffet Breakfast')}
                >
                  Buffet Breakfast
                </button>
                <button
                  className={`btn ${selectedFood.includes('Beachside BBQ') ? 'btn-success' : 'btn-outline-success'} mx-2`}
                  onClick={() => handleFoodSelection('Beachside BBQ')}
                >
                  Beachside BBQ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seaside Resort */}
        <div className="col-md-4 d-flex">
          <div className="card h-100 w-100">
            <img
              src="/images/sea side resort.jpg"
              className="card-img-top"
              alt="Seaside Resort"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Seaside Resort</h5>
              <p className="card-text">Experience ultimate relaxation at our exclusive resort.</p>
              <p><strong>Price:</strong> $150/night</p>
              <div className="mt-auto">
                <h6>Choose Your Stay:</h6>
                <select className="form-control mb-2" onChange={handleRoomSelection}>
                  <option value="">Select a room</option>
                  <option value="Garden View Room">Garden View Room</option>
                  <option value="Ocean View Room">Ocean View Room</option>
                  <option value="Private Villa">Private Villa</option>
                </select>
                <button className="btn btn-info btn-block mb-2" onClick={handleAddToCart}>Add to Cart</button>
                <h6>Food Options:</h6>
                <button
                  className={`btn ${selectedFood.includes('Luxury Dinner') ? 'btn-success' : 'btn-outline-success'} mx-2`}
                  onClick={() => handleFoodSelection('Luxury Dinner')}
                >
                  Luxury Dinner
                </button>
                <button
                  className={`btn ${selectedFood.includes('All-Inclusive Package') ? 'btn-success' : 'btn-outline-success'} mx-2`}
                  onClick={() => handleFoodSelection('All-Inclusive Package')}
                >
                  All-Inclusive Package
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Beachside Camping */}
        <div className="col-md-4 d-flex">
          <div className="card h-100 w-100">
            <img
              src="/images/camping.jpg"
              className="card-img-top"
              alt="Beachside Camping"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Beachside Camping</h5>
              <p className="card-text">A more adventurous stay by the beach, perfect for nature lovers.</p>
              <p><strong>Price:</strong> $40/night</p>
              <div className="mt-auto">
                <h6>Choose Your Stay:</h6>
                <select className="form-control mb-2" onChange={handleRoomSelection}>
                  <option value="">Select a room</option>
                  <option value="Standard Tent">Standard Tent</option>
                  <option value="Luxury Tent">Luxury Tent</option>
                  <option value="Glamping Tent">Glamping Tent</option>
                </select>
                <button className="btn btn-info btn-block mb-2" onClick={handleAddToCart}>Add to Cart</button>
                <h6>Additional Services:</h6>
                <button
                  className={`btn ${selectedServices.includes('Campfire Experience') ? 'btn-warning' : 'btn-outline-warning'} mx-2`}
                  onClick={() => handleServiceSelection('Campfire Experience')}
                >
                  Campfire Experience
                </button>
                <button
                  className={`btn ${selectedServices.includes('Beach Sports Rental') ? 'btn-warning' : 'btn-outline-warning'} mx-2`}
                  onClick={() => handleServiceSelection('Beach Sports Rental')}
                >
                  Beach Sports Rental
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="btn btn-primary mt-4" onClick={() => setShowBookingOptions(true)}>Book Now</button>

      {/* Booking Modal */}
      {showBookingOptions && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking Options</h5>
                <button type="button" className="close" onClick={() => setShowBookingOptions(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <h6>Selected Room: {selectedRoom}</h6>
                <label htmlFor="bookingDate">Select Booking Date:</label>
                <input
                  type="date"
                  id="bookingDate"
                  className="form-control"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                />
                <h6 className="mt-3">Payment Method:</h6>
                <select
                  className="form-control"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowBookingOptions(false)}>Close</button>
                <button className="btn btn-primary" onClick={handleBooking}>Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Link className="btn btn-dark mt-4" to="/tickets">Back to Tickets</Link>
    </div>
  );
};

export default Lodging;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Lodging = () => {
//   const [selectedRoom, setSelectedRoom] = useState('');
//   const [selectedFood, setSelectedFood] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showBookingOptions, setShowBookingOptions] = useState(false);
//   const [bookingDate, setBookingDate] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handleRoomSelection = (e) => {
//     setSelectedRoom(e.target.value);
//   };

//   const handleFoodSelection = (foodOption) => {
//     setSelectedFood(prevFood =>
//       prevFood.includes(foodOption)
//         ? prevFood.filter(item => item !== foodOption)
//         : [...prevFood, foodOption]
//     );
//   };

//   const handleServiceSelection = (serviceOption) => {
//     setSelectedServices(prevServices =>
//       prevServices.includes(serviceOption)
//         ? prevServices.filter(item => item !== serviceOption)
//         : [...prevServices, serviceOption]
//     );
//   };

//   const handleAddToCart = () => {
//     if (selectedRoom) {
//       const newCartItem = {
//         room: selectedRoom,
//         food: selectedFood,
//         services: selectedServices,
//         price: calculatePrice(selectedRoom),
//       };
//       setCart([...cart, newCartItem]);
//       alert("Added to cart!");
//     } else {
//       alert("Please select a room first!");
//     }
//   };

//   const calculatePrice = (room) => {
//     switch (room) {
//       case 'Standard Room':
//         return 120;
//       case 'Deluxe Room':
//         return 150;
//       case 'Suite':
//         return 200;
//       case 'Garden View Room':
//         return 100;
//       case 'Ocean View Room':
//         return 130;
//       case 'Private Villa':
//         return 180;
//       case 'Standard Tent':
//         return 40;
//       case 'Luxury Tent':
//         return 70;
//       case 'Glamping Tent':
//         return 100;
//       default:
//         return 0;
//     }
//   };

//   const handleBooking = () => {
//     if (!bookingDate || !paymentMethod) {
//       alert("Please select a booking date and payment method.");
//     } else {
//       alert("Booking confirmed!");
//       setShowBookingOptions(false);
//     }
//   };

//   return (
//     <div className="container text-center mt-5">
//       <h2>Lodging Options</h2>
//       <p>Comfortable stay nearby for the perfect getaway. Choose from our luxurious rooms, food options, and exciting additional services!</p>

//       <div className="row mt-4">
//         {/* Beachfront Hotel */}
//         <div className="col-md-4 d-flex">
//           <div className="card h-100 w-100">
//             <img src="/images/Beach side.png" className="card-img-top" alt="Beachfront Hotel" />
//             <div className="card-body d-flex flex-column">
//               <h5 className="card-title">Beachfront Hotel</h5>
//               <p className="card-text">Enjoy luxurious amenities with a stunning view of the beach.</p>
//               <p><strong>Price:</strong> $120/night</p>
//               <div className="mt-auto">
//                 <h6>Choose Your Stay:</h6>
//                 <select className="form-control mb-2" onChange={handleRoomSelection}>
//                   <option value="">Select a room</option>
//                   <option value="Standard Room">Standard Room</option>
//                   <option value="Deluxe Room">Deluxe Room</option>
//                   <option value="Suite">Suite</option>
//                 </select>
//                 <button className="btn btn-info btn-block mb-2" onClick={handleAddToCart}>Add to Cart</button>
//                 <h6>Food Options:</h6>
//                 <button
//                   className={`btn ${selectedFood.includes('Buffet Breakfast') ? 'btn-success' : 'btn-outline-success'} mx-2`}
//                   onClick={() => handleFoodSelection('Buffet Breakfast')}
//                 >
//                   Buffet Breakfast
//                 </button>
//                 <button
//                   className={`btn ${selectedFood.includes('Beachside BBQ') ? 'btn-success' : 'btn-outline-success'} mx-2`}
//                   onClick={() => handleFoodSelection('Beachside BBQ')}
//                 >
//                   Beachside BBQ
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Seaside Resort */}
//         <div className="col-md-4 d-flex">
//           <div className="card h-100 w-100">
//             <img src="/images/sea side resort.jpg" className="card-img-top" alt="Seaside Resort" />
//             <div className="card-body d-flex flex-column">
//               <h5 className="card-title">Seaside Resort</h5>
//               <p className="card-text">Experience ultimate relaxation at our exclusive resort.</p>
//               <p><strong>Price:</strong> $150/night</p>
//               <div className="mt-auto">
//                 <h6>Choose Your Stay:</h6>
//                 <select className="form-control mb-2" onChange={handleRoomSelection}>
//                   <option value="">Select a room</option>
//                   <option value="Garden View Room">Garden View Room</option>
//                   <option value="Ocean View Room">Ocean View Room</option>
//                   <option value="Private Villa">Private Villa</option>
//                 </select>
//                 <button className="btn btn-info btn-block mb-2" onClick={handleAddToCart}>Add to Cart</button>
//                 <h6>Food Options:</h6>
//                 <button
//                   className={`btn ${selectedFood.includes('Luxury Dinner') ? 'btn-success' : 'btn-outline-success'} mx-2`}
//                   onClick={() => handleFoodSelection('Luxury Dinner')}
//                 >
//                   Luxury Dinner
//                 </button>
//                 <button
//                   className={`btn ${selectedFood.includes('All-Inclusive Package') ? 'btn-success' : 'btn-outline-success'} mx-2`}
//                   onClick={() => handleFoodSelection('All-Inclusive Package')}
//                 >
//                   All-Inclusive Package
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Beachside Camping */}
//         <div className="col-md-4 d-flex">
//           <div className="card h-100 w-100">
//             <img src="/images/camping.jpg" className="card-img-top" alt="Beachside Camping" />
//             <div className="card-body d-flex flex-column">
//               <h5 className="card-title">Beachside Camping</h5>
//               <p className="card-text">A more adventurous stay by the beach, perfect for nature lovers.</p>
//               <p><strong>Price:</strong> $40/night</p>
//               <div className="mt-auto">
//                 <h6>Choose Your Stay:</h6>
//                 <select className="form-control mb-2" onChange={handleRoomSelection}>
//                   <option value="">Select a room</option>
//                   <option value="Standard Tent">Standard Tent</option>
//                   <option value="Luxury Tent">Luxury Tent</option>
//                   <option value="Glamping Tent">Glamping Tent</option>
//                 </select>
//                 <button className="btn btn-info btn-block mb-2" onClick={handleAddToCart}>Add to Cart</button>
//                 <h6>Additional Services:</h6>
//                 <button
//                   className={`btn ${selectedServices.includes('Campfire Experience') ? 'btn-warning' : 'btn-outline-warning'} mx-2`}
//                   onClick={() => handleServiceSelection('Campfire Experience')}
//                 >
//                   Campfire Experience
//                 </button>
//                 <button
//                   className={`btn ${selectedServices.includes('Beach Sports Rental') ? 'btn-warning' : 'btn-outline-warning'} mx-2`}
//                   onClick={() => handleServiceSelection('Beach Sports Rental')}
//                 >
//                   Beach Sports Rental
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Book Now Button */}
//       <button className="btn btn-primary mt-4" onClick={() => setShowBookingOptions(true)}>Book Now</button>

//       {/* Booking Modal */}
//       {showBookingOptions && (
//         <div className="modal show" style={{ display: 'block' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Booking Options</h5>
//                 <button type="button" className="close" onClick={() => setShowBookingOptions(false)}>&times;</button>
//               </div>
//               <div className="modal-body">
//                 <h6>Selected Room: {selectedRoom}</h6>
//                 <label htmlFor="bookingDate">Select Booking Date:</label>
//                 <input
//                   type="date"
//                   id="bookingDate"
//                   className="form-control"
//                   value={bookingDate}
//                   onChange={(e) => setBookingDate(e.target.value)}
//                 />
//                 <h6 className="mt-3">Payment Method:</h6>
//                 <select
//                   className="form-control"
//                   value={paymentMethod}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                 >
//                   <option value="">Select Payment Method</option>
//                   <option value="Credit Card">Credit Card</option>
//                   <option value="Debit Card">Debit Card</option>
//                   <option value="PayPal">PayPal</option>
//                 </select>
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowBookingOptions(false)}>Close</button>
//                 <button className="btn btn-primary" onClick={handleBooking}>Confirm Booking</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Link className="btn btn-dark mt-4" to="/tickets">Back to Tickets</Link>
//     </div>
//   );
// };

// export default Lodging;
