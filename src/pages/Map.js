import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <section id="map" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-warning">Festival Map</h2>
        <div className="map-container">
          <img src="images/festival-map.jpg" alt="Festival Map" className="w-100" />
        </div>
      </Container>
    </section>
  );
};

export default Map;
