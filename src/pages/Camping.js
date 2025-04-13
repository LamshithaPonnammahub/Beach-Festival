import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Camping = () => {
  return (
    <section id="camping" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-warning">Camping Packages</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/camping1.jpg" />
              <Card.Body>
                <Card.Title>Basic Tent Package</Card.Title>
                <Card.Text>Get a comfortable tent for two nights with festival access.</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/camping2.jpg" />
              <Card.Body>
                <Card.Title>Family Tent Package</Card.Title>
                <Card.Text>Enjoy a spacious family-friendly tent with added amenities.</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src="images/camping3.jpg" />
              <Card.Body>
                <Card.Title>VIP Camping Package</Card.Title>
                <Card.Text>Get the VIP camping experience with exclusive services.</Card.Text>
                <Button variant="warning">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Camping;
