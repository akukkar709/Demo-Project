// src/components/common/SuccessMessage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const SuccessMessage = ({ message = "We'll call you within 1 hour to confirm your appointment." }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
          <FiCheckCircle className="h-16 w-16 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-gray-700 mb-6">
          We've received your appointment request.
        </p>
        <p className="text-gray-700 mb-8">
          {message}
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;