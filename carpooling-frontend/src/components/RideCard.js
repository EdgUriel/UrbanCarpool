import React from "react";
import PropTypes from "prop-types";
import {
  MapPin,
  Clock,
  Car,
  Music,
  Dog,
  Star,
  User,
  Users,
} from "lucide-react";
import MapComponent from "./MapComponent"; // Ensure the path is correct

const RideCard = ({ ride, onBookRide }) => {
  console.log(
    "RideCard rendering for ride:",
    ride.id,
    ride.origin,
    ride.destination
  );

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl max-w-md mx-auto">
      <div className="px-4 pb-4">
        <MapComponent
          origin={ride.origin}
          destination={ride.destination}
          mapId={ride.id}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${ride.driverName}`}
                alt={ride.driverName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{ride.driverName}</p>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">
                  {ride.driverRating}
                </span>
              </div>
            </div>
          </div>
          <div className="px-2 py-1 bg-gray-100 rounded-full text-sm flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>{ride.driverGender}</span>
          </div>
        </div>
        <div className="border-t border-b border-gray-200 my-3"></div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{new Date(ride.departureDatetime).toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Car className="w-4 h-4 text-blue-500" />
            <span>
              {ride.car} ({ride.plate})
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span>{ride.availableSeats} seats available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Dog className="w-4 h-4 text-blue-500" />
            <span>{ride.petsAllowed ? "Pets allowed" : "No pets"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Music className="w-4 h-4 text-blue-500" />
            <span>{ride.musicPreference ? "Music allowed" : "No music"}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-50 p-4">
        <div>
          <span className="text-2xl font-bold text-green-600">
            {ride.seatPrice} MXN
          </span>
          <p className="text-xs text-gray-500">per seat</p>
        </div>
        <button
          onClick={() => onBookRide(ride)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Book This Ride
        </button>
      </div>
    </div>
  );
};

export default RideCard;
