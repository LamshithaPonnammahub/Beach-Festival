// import React from 'react';
// import { Link } from 'react-router-dom';

// const Map = () => (
//   <div className="container text-center mt-5">
//     <h2>Festival Map</h2>
//     <p>Explore the venue layout and locate key attractions.</p>
//     <Link className="btn btn-dark mt-3" to="/home">Back to Home</Link>
//   </div>
// );

// export default Map;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null); // State to track selected location

  // Base festival center coordinates (center of the venue)
  const festivalCenter = [51.505, -0.09];

  // Locations defined relative to the festival center
  const locations = [
    {
      id: 1,
      name: 'Lodging Area',
      description: 'Comfortable lodging available for all guests.',
      position: [festivalCenter[0] + 0.001, festivalCenter[1] + 0.001], // Relative to center
      link: '/lodging',
    },
    {
      id: 2,
      name: 'Ticket Booth',
      description: 'Get your tickets here!',
      position: [festivalCenter[0] + 0.002, festivalCenter[1] - 0.002], // Relative to center
      link: '/tickets',
    },
    {
      id: 3,
      name: 'Food Stalls',
      description: 'Delicious food from various cuisines.',
      position: [festivalCenter[0] - 0.002, festivalCenter[1] + 0.002], // Relative to center
      link: '/food',
    },
    {
      id: 4,
      name: 'Camping Area',
      description: 'Enjoy the beachside camping experience.',
      position: [festivalCenter[0] - 0.003, festivalCenter[1] - 0.003], // Relative to center
      link: '/camping',
    },
  ];

  // Filter locations based on the search query
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle location change from select dropdown
  const handleLocationChange = (e) => {
    const selected = locations.find(location => location.id === parseInt(e.target.value));
    setSelectedLocation(selected);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Festival Map</h2>
      <p>Explore the venue layout and locate key attractions.</p>

      {/* Select Dropdown for Location */}
      <select
        className="form-control mb-4"
        onChange={handleLocationChange}
        value={selectedLocation ? selectedLocation.id : ''}
      >
        <option value="">Select a Location</option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>

      {/* Interactive Map using Leaflet */}
      <MapContainer
        center={selectedLocation ? selectedLocation.position : festivalCenter} // Center map on selected location or festival center
        zoom={13}
        style={{ height: '500px', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add Markers for each filtered location */}
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={new L.Icon.Default()} // Use default Leaflet icon
          >
            <Popup>
              <h5>{location.name}</h5>
              <p>{location.description}</p>
              <Link to={location.link} className="btn btn-primary">
                Learn More
              </Link>
            </Popup>
          </Marker>
        ))}

        {/* Custom Zoom Controls */}
        <ZoomControl position="topright" />
      </MapContainer>

      <div className="mt-4">
        <h4>Quick Links</h4>
        <ul className="list-unstyled">
          <li><Link to="/lodging" className="text-primary">Lodging Area</Link></li>
          <li><Link to="/tickets" className="text-primary">Ticket Booth</Link></li>
          <li><Link to="/food" className="text-primary">Food Stalls</Link></li>
          <li><Link to="/camping" className="text-primary">Camping Area</Link></li>
        </ul>
      </div>

      <Link className="btn btn-dark mt-3" to="/home">Back to Home</Link>
    </div>
  );
};

export default Map;