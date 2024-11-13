import React from "react";
import PropTypes from "prop-types";

const ConfirmTrip = ({ tripDetails, onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Confirm Booking
      </h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="h-5 w-5 mr-2 bg-gray-500 rounded-full"></div>
          <span>{new Date(tripDetails.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 mr-2 bg-gray-500 rounded-full"></div>
          <span>{tripDetails.time}</span>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 mr-2 bg-gray-500 rounded-full"></div>
          <span>
            {tripDetails.origin} to {tripDetails.destination}
          </span>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 mr-2 bg-gray-500 rounded-full"></div>
          <span>${tripDetails.price}</span>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 mr-2 bg-gray-500 rounded-full"></div>
          <span>{tripDetails.seats} seats available</span>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);

ConfirmTrip.propTypes = {
  tripDetails: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmTrip;
