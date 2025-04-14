import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Camping = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedTent, setSelectedTent] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [cart, setCart] = useState([]);
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Handle camping package selection
  const handlePackageSelection = (e) => {
    setSelectedPackage(e.target.value);
  };

  // Handle tent selection
  const handleTentSelection = (e) => {
    setSelectedTent(e.target.value);
  };

  // Handle activity selection
  const handleActivitySelection = (activity) => {
    setSelectedActivities((prevActivities) => {
      if (prevActivities.includes(activity)) {
        return prevActivities.filter((item) => item !== activity);
      } else {
        return [...prevActivities, activity];
      }
    });
  };

  // Handle extra item selection
  const handleExtraSelection = (extra) => {
    setSelectedExtras((prevExtras) => {
      if (prevExtras.includes(extra)) {
        return prevExtras.filter((item) => item !== extra);
      } else {
        return [...prevExtras, extra];
      }
    });
  };

  // Add selected items to cart
  const handleAddToCart = () => {
    if (selectedPackage) {
      const newCartItem = {
        package: selectedPackage,
        tent: selectedTent,
        activities: selectedActivities,
        extras: selectedExtras,
        price: calculatePrice(selectedPackage),
      };
      setCart([...cart, newCartItem]);
      alert('Added to cart!');
    } else {
      alert('Please select a package first!');
    }
  };

  // Calculate price based on the selected package
  const calculatePrice = (campingPackage) => {
    switch (campingPackage) {
      case 'Basic Package':
        return 50;
      case 'Premium Package':
        return 80;
      case 'Luxury Package':
        return 120;
      default:
        return 0;
    }
  };

  // Show booking options (date and payment method)
  const handleBooking = () => {
    if (!bookingDate || !paymentMethod) {
      alert('Please select a booking date and payment method.');
    } else {
      alert('Booking successful!');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Camping Area</h2>
      <p>Stay close to nature by camping near the beach.</p>

      {/* Camping Package Selection */}
      <div className="mt-4">
        <h5>Select a Camping Package</h5>
        <select className="form-control" value={selectedPackage} onChange={handlePackageSelection}>
          <option value="">Select Package</option>
          <option value="Basic Package">Basic Package - $50/night</option>
          <option value="Premium Package">Premium Package - $80/night</option>
          <option value="Luxury Package">Luxury Package - $120/night</option>
        </select>
      </div>

      {/* Tent Selection */}
      <div className="mt-4">
        <h5>Select Your Tent</h5>
        <select className="form-control" value={selectedTent} onChange={handleTentSelection}>
          <option value="">Select Tent</option>
          <option value="Single Tent">Single Tent</option>
          <option value="Double Tent">Double Tent</option>
          <option value="Family Tent">Family Tent</option>
        </select>
      </div>

      {/* Activity Selection */}
      <div className="mt-4">
        <h5>Select Activities</h5>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="kayaking"
            onChange={() => handleActivitySelection('Kayaking')}
          />
          <label className="form-check-label" htmlFor="kayaking">
            Kayaking
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rockClimbing"
            onChange={() => handleActivitySelection('Rock Climbing')}
          />
          <label className="form-check-label" htmlFor="rockClimbing">
            Rock Climbing
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="zipLining"
            onChange={() => handleActivitySelection('Zip Lining')}
          />
          <label className="form-check-label" htmlFor="zipLining">
            Zip Lining
          </label>
        </div>
      </div>

      {/* Extra Options */}
      <div className="mt-4">
        <h5>Select Camping Extras</h5>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="bbqGrill"
            onChange={() => handleExtraSelection('BBQ Grill')}
          />
          <label className="form-check-label" htmlFor="bbqGrill">
            BBQ Grill
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="sleepingBag"
            onChange={() => handleExtraSelection('Sleeping Bag')}
          />
          <label className="form-check-label" htmlFor="sleepingBag">
            Sleeping Bag
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="portableChair"
            onChange={() => handleExtraSelection('Portable Chair')}
          />
          <label className="form-check-label" htmlFor="portableChair">
            Portable Chair
          </label>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {/* Show Booking Options */}
      {cart.length > 0 && (
        <div className="mt-5">
          <h5>Booking Details</h5>
          <div className="form-group">
            <label>Select Booking Date</label>
            <input
              type="date"
              className="form-control"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Payment Method</label>
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
          <button className="btn btn-success mt-3" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      )}

      {/* Back Button */}
      <Link className="btn btn-dark mt-3" to="/tickets">
        Back to Tickets
      </Link>
    </div>
  );
};

export default Camping;
