"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function SeatAlert({ show = false, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // La alerta se cierra automáticamente después de 4 segundos

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 animate-slide-in">
      <CheckCircle className="h-6 w-6 text-white" />
      <span>You have successfully added more seats to your booking.</span>
      <button
        onClick={onClose}
        className="ml-auto bg-transparent text-white hover:text-gray-200 focus:outline-none"
      >
        ✕
      </button>
    </div>
  );
}
