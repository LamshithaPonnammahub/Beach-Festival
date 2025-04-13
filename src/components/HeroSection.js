
// // import React from 'react';
// import { Container, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import './HeroSection.css';  // If you want to add custom styles

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <h1 className="hero-heading text-white">Welcome to the Beach Festival 2025</h1>
//             <p className="hero-subheading text-white">Experience the best of music, food, and fun on the beach!</p>
//             {/* Use Link for navigation instead of <a> */}
//             <Link to="/login">
//               <Button variant="warning" size="lg">Join the Festival</Button>
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default HeroSection;
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
  const navigate = useNavigate(); // Declare navigate

  const handleJoinFestival = () => {
    navigate('/login'); // Navigate to Login page
  };

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="hero-heading text-white">Welcome to the Beach Festival 2025</h1>
            <p className="hero-subheading text-white">Experience the best of music, food, and fun on the beach!</p>
            <Button variant="warning" size="lg" onClick={handleJoinFestival}>Join the Festival</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

