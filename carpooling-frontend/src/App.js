import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import SupportPage from "./pages/SupportPage";
import Dashboard from "./pages/Dashboard";
import SearchRide from "./pages/SearchRide";
import PublishRide from "./pages/PublishRide";
import RideDetails from "./pages/RideDetails";
import UserProfile from "./pages/UserProfile";
import TripHistory from "./pages/TripHistory";
import RatingsReviews from "./pages/RatignsReviews";
import AccountSettings from "./pages/AccountSettings";
import PublishConfirmation from "./pages/PublishConfirmation";
import ReservationConfirmation from "./pages/ReservationConfirmation";
import NotificationsPage from "./pages/NotificationsPage";
import CreateRide from "./pages/CreateRide";
import FindRide from "./pages/FindRide";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search-ride" element={<SearchRide />} />
        <Route path="/publish-ride" element={<PublishRide />} />
        <Route path="/ride-details" element={<RideDetails />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/create-ride" element={<CreateRide />} />
        <Route path="/find-ride" element={<FindRide />} />
        <Route path="/trip-history" element={<TripHistory />} />
        <Route path="/rating-reviews" element={<RatingsReviews />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/publish-confirmation" element={<PublishConfirmation />} />
        <Route
          path="/reservation-confirmation"
          element={<ReservationConfirmation />}
        />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/supportpage" element={<SupportPage />} />
        <Route path="/supportpage" element={<SupportPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
