import React from 'react';

const OffersSection = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Special Offers</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Early Bird Offer" />
            <div className="card-body">
              <h5 className="card-title">Early Bird Discount</h5>
              <p className="card-text">Get 20% off on early ticket bookings. Limited time offer!</p>
              <button className="btn btn-primary">Grab Offer</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Group Booking Offer" />
            <div className="card-body">
              <h5 className="card-title">Group Booking</h5>
              <p className="card-text">Book 5 tickets and get 1 free! Best for groups.</p>
              <button className="btn btn-primary">Grab Offer</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="VIP Access Offer" />
            <div className="card-body">
              <h5 className="card-title">VIP Access</h5>
              <p className="card-text">Enjoy exclusive lounge access and meet the artists!</p>
              <button className="btn btn-primary">Grab Offer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;