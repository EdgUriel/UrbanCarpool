import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ConfirmTrip = ({ tripDetails, onClose }) => {
  const handleConfirm = () => {
    // Logic to confirm the trip
    console.log("Trip confirmed");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Confirm Trip
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Are you sure you want to book this trip?
        </p>
        <div className="mb-4">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>{tripDetails.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>{tripDetails.time}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>
              {tripDetails.origin} to {tripDetails.destination}
            </span>
          </div>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>{tripDetails.price}</span>
          </div>
          <div className="flex items-center">
            <UserGroupIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>{tripDetails.seats} seats available</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTrip;
