import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Offers from './pages/Offers';
import Map from './pages/Map';
import Tickets from './pages/Tickets';
import Lodging from './pages/Lodging';
import Camping from './pages/Camping';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/map" element={<Map />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/lodging" element={<Lodging />} />
      <Route path="/camping" element={<Camping />} />
    </Routes>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Offers from './pages/Offers';
// import Map from './pages/Map';
// import Tickets from './pages/Tickets';
// import Lodging from './pages/Lodging';
// import Camping from './pages/Camping';

// function App() {
//   return (
//     <Router> {/* Make sure the entire app is wrapped with BrowserRouter */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/offers" element={<Offers />} />
//         <Route path="/map" element={<Map />} />
//         <Route path="/tickets" element={<Tickets />} />
//         <Route path="/lodging" element={<Lodging />} />
//         <Route path="/camping" element={<Camping />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
