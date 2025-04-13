import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2025 Beach Festival. All rights reserved.</p>
          </Col>
          <Col>
            <p>
              <a href="/contact" className="text-white">Contact Us</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
