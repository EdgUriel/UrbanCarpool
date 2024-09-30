import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Maps from './pages/Maps';

function App() {
  return (
    <Router>
      <Navbar />
      <MapComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </Router>
  );
}

export default App;
