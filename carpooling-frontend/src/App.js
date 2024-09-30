import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Maps from './pages/Maps';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
