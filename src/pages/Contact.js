// import React from 'react';
// import { Link } from 'react-router-dom';

// const Contact = () => (
//   <div className="container text-center mt-5">
//     <h2>Contact Us</h2>
//     <p>For any queries, reach us at contact@beachfest.com</p>
//     <Link className="btn btn-outline-primary mt-3" to="/home">Back to Home</Link>
//   </div>
// );

// export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
  <div className="container text-center mt-5">
    <h2>Contact Us</h2>
    <p>For any queries, reach us at:</p>
    <p><strong>Email:</strong> contact@beachfest.com</p>
    <p><strong>Phone:</strong> +123 456 7890</p>
    <p><strong>Address:</strong> 123 Beach Street, Coastal City, Oceanview</p>
    
    <h4>Follow us on Social Media:</h4>
    <div>
      <a href="https://facebook.com/BeachFest" className="btn btn-outline-primary mx-2">Facebook</a>
      <a href="https://twitter.com/BeachFest" className="btn btn-outline-primary mx-2">Twitter</a>
      <a href="https://instagram.com/BeachFest" className="btn btn-outline-primary mx-2">Instagram</a>
    </div>
    
    <Link className="btn btn-outline-primary mt-3" to="/home">Back to Home</Link>
  </div>
);

export default Contact;