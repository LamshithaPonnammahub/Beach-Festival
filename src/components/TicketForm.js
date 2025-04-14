import React, { useState } from 'react';

const TicketForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(100); // Assuming 100 is the ticket price

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * 100); // Update total price based on quantity
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully purchased ${quantity} tickets for a total of $${totalPrice}`);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Buy Your Tickets</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="ticket-quantity" className="form-label">Select Quantity</label>
          <input
            type="number"
            id="ticket-quantity"
            className="form-control"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group mt-3">
          <p>Total Price: <strong>${totalPrice}</strong></p>
        </div>
        <button type="submit" className="btn btn-success mt-3">Purchase</button>
      </form>
    </div>
  );
};

export default TicketForm;