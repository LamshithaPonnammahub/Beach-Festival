// import React, { useState } from 'react';

// const OffersSection = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOffer, setSelectedOffer] = useState(null);

//   const offers = [
//     {
//       title: 'Early Bird Discount',
//       description: 'Book 3 months ahead and get 20% off!',
//       price: '$100',
//       discount: '$80',
//       img: '/images/Early bird.jpg',
//     },
//     {
//       title: 'Group Discount',
//       description: 'Bring 5 or more people and save 25% on the total.',
//       price: '$200',
//       discount: '$150',
//       img: '/images/group discount.jpg',
//     },
//     {
//       title: 'Weekend Special',
//       description: 'Weekend stays include a free adventure activity.',
//       price: '$150',
//       discount: '$150',
//       img: '/images/image.jpg', // Initial empty value for the weekend special image
//     },
//   ];

//   // ✅ Add these handlers
//   const handleBookNow = (offer) => {
//     setSelectedOffer(offer);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleImageUpload = (event, index) => {
//     const newOffers = [...offers];
//     newOffers[index].img = URL.createObjectURL(event.target.files[0]);
//     // Force re-render by updating the state (Note: This is a simplified version)
//     offers.splice(index, 1, newOffers[index]);
//     setSelectedOffer({ ...selectedOffer }); // Trigger re-render
//   };

//   return (
//     <div className="mt-4">
//       <h3 className="mb-4">Available Offers</h3>
//       <div className="row">
//         {offers.map((offer, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card shadow-sm border-0 rounded-lg">
//               <img
//                 src={offer.img || '/images/default-image.png'}
//                 className="card-img-top"
//                 alt={offer.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-primary">{offer.title}</h5>
//                 <p className="card-text">{offer.description}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="text-muted text-decoration-line-through">{offer.price}</div>
//                   <div className="text-success font-weight-bold">{offer.discount}</div>
//                 </div>
//                 <button
//                   className="btn btn-success mt-3 w-100"
//                   onClick={() => handleBookNow(offer)}
//                 >
//                   Book Now
//                 </button>
//                 {/* <input
//                   type="file"
//                   accept="image/*"
//                   className="form-control mt-3"
//                   onChange={(event) => handleImageUpload(event, index)}
//                 /> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showModal && selectedOffer && (
//         <div className="modal fade show d-block" tabIndex="-1" aria-hidden="true">
//           <div className="modal-dialog modal-lg">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Booking for {selectedOffer.title}</h5>
//                 <button type="button" className="btn-close" onClick={closeModal}></button>
//               </div>
//               <div className="modal-body">
//                 <h4>Confirm your booking</h4>
//                 <p><strong>Description:</strong> {selectedOffer.description}</p>
//                 <p><strong>Original Price:</strong> {selectedOffer.price}</p>
//                 <p><strong>Discounted Price:</strong> {selectedOffer.discount}</p>
//                 <button className="btn btn-primary" onClick={closeModal}>Proceed with Booking</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OffersSection;
import React, { useState } from 'react';

const OffersSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [offers, setOffers] = useState([
    {
      title: 'Early Bird Discount',
      description: 'Book 3 months ahead and get 20% off!',
      price: '$100',
      discount: '$80',
      img: '/images/Early bird.jpg',
    },
    {
      title: 'Group Discount',
      description: 'Bring 5 or more people and save 25% on the total.',
      price: '$200',
      discount: '$150',
      img: '/images/Family.jpg',
    },
    {
      title: 'Weekend Special',
      description: 'Weekend stays include a free adventure activity.',
      price: '$150',
      discount: '$150',
      img: '/images/image.jpg', // Initial empty value for the weekend special image
    },
  ]);

  const handleBookNow = (offer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageUpload = (event, index) => {
    const newOffers = [...offers];
    newOffers[index].img = URL.createObjectURL(event.target.files[0]);
    setOffers(newOffers); // Proper state update with setOffers
  };

  return (
    <div className="mt-4">
      <h3 className="mb-4">Available Offers</h3>
      <div className="row">
        {offers.map((offer, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm border-0 rounded-lg" style={{ width: '300px', height: '450px' }}>
              <img
                src={offer.img || '/images/default-image.png'}
                className="card-img-top"
                alt={offer.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body" style={{ height: '200px', overflow: 'hidden' }}>
                <h5 className="card-title text-primary" style={{ fontSize: '18px' }}>{offer.title}</h5>
                <p className="card-text" style={{ fontSize: '14px', height: '60px', overflow: 'hidden' }}>
                  {offer.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-muted text-decoration-line-through">{offer.price}</div>
                  <div className="text-success font-weight-bold">{offer.discount}</div>
                </div>
                <button
                  className="btn btn-success mt-3 w-100"
                  onClick={() => handleBookNow(offer)}
                >
                  Book Now
                </button>
                {/* Image upload input */}
                <input
                  type="file"
                  accept="image/*"
                  className="form-control mt-3"
                  onChange={(event) => handleImageUpload(event, index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedOffer && (
        <div className="modal fade show d-block" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking for {selectedOffer.title}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <h4>Confirm your booking</h4>
                <p><strong>Description:</strong> {selectedOffer.description}</p>
                <p><strong>Original Price:</strong> {selectedOffer.price}</p>
                <p><strong>Discounted Price:</strong> {selectedOffer.discount}</p>
                <button className="btn btn-primary" onClick={closeModal}>Proceed with Booking</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffersSection;
