import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Lodging = () => {
  return (
    <section id="lodging" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-warning">Lodging Options</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/lodging1.jpg" />
              <Card.Body>
                <Card.Title>Beachside Hotel</Card.Title>
                <Card.Text>Relax by the beach with premium facilities and views.</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/lodging2.jpg" />
              <Card.Body>
                <Card.Title>Luxury Villa</Card.Title>
                <Card.Text>Exclusive villas with private pools and spa services.</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/lodging3.jpg" />
              <Card.Body>
                <Card.Title>Camping Tent</Card.Title>
                <Card.Text>Experience the festival with our comfortable tent options.</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Lodging;
