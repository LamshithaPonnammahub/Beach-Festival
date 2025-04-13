import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Offers = () => {
  return (
    <section id="offers" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-warning">Special Offers</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/offer1.jpg" />
              <Card.Body>
                <Card.Title>Early Bird Discount</Card.Title>
                <Card.Text>Get 20% off when you book early. Limited time only!</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/offer2.jpg" />
              <Card.Body>
                <Card.Title>Group Discount</Card.Title>
                <Card.Text>Bring 5+ friends and save 30% on all tickets!</Card.Text>
                <Button variant="warning">Grab Offer</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/offer3.jpg" />
              <Card.Body>
                <Card.Title>VIP Weekend Pass</Card.Title>
                <Card.Text>Upgrade to VIP for a luxury festival experience.</Card.Text>
                <Button variant="warning">Book VIP</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offers;
