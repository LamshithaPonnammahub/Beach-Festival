import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TicketForm = () => {
  const [ticketType, setTicketType] = useState('general');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tickets booked: ${ticketType} - Quantity: ${quantity}`);
  };

  return (
    <section id="ticket-form" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-warning">Book Your Tickets</h2>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="ticketType">
                <Form.Label>Ticket Type</Form.Label>
                <Form.Control as="select" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
                  <option value="general">General Admission</option>
                  <option value="vip">VIP Pass</option>
                  <option value="family">Family Package</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
              </Form.Group>

              <Button variant="warning" type="submit" className="mt-3">
                Confirm Booking
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TicketForm;
