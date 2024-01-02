// UserTypeSelection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function UserTypeSelection({ setUserType }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <p className="text-3xl font-semibold mb-4">Choose your user type:</p>
        <div className="flex flex-col items-center">
          <Link to="/admin" onClick={() => setUserType('admin')} className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600 mb-2">
            Admin
          </Link>
          <Link to="/" onClick={() => setUserType('student')} className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600">
            Student
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserTypeSelection;
