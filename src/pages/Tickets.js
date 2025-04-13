import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Tickets = () => {
  return (
    <section id="tickets" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-warning">Book Your Tickets</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>General Admission</Card.Title>
                <Card.Text>Access to all areas except VIP.</Card.Text>
                <Button variant="warning">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>VIP Pass</Card.Title>
                <Card.Text>Exclusive access to VIP areas and amenities.</Card.Text>
                <Button variant="warning">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>Family Package</Card.Title>
                <Card.Text>Get a special family deal for 2 adults and 2 kids.</Card.Text>
                <Button variant="warning">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tickets;
