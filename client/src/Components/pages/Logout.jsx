import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

function Logout() {
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState(null);

  const handleLogout = () => {
    fetch(`${apiUrl}/logout`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('Logout failed:', response.statusText);
          setLogoutMessage('Logout failed. Please try again.');
          throw new Error('Logout failed');
        }
      })
      .then(responseData => {
        setLogoutMessage(responseData.message);
        navigate('/');
      })
      .catch(error => {
        console.error('Logout failed:', error);
        setLogoutMessage('Logout failed. Please try again.');
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
    <div>
      {logoutMessage && <p>{logoutMessage}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  </div>
  
  );
}

export default Logout;
