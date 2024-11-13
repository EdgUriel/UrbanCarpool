import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CheckCircle, X } from "lucide-react";

function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Cerrar automáticamente después de 5 segundos
    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [onClose]);

  return (
    <div className="fixed top-10 right-5 bg-white border-l-4 border-green-500 rounded-lg shadow-lg p-6 max-w-lg animate-slide-in-top">
      <div className="flex items-center">
        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="ml-auto bg-transparent text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
