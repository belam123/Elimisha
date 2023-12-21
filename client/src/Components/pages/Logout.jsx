import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    onLogout(); // Update the parent component's state
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="mb-20 p-3 ">
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-red active:bg-red-800 "
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
