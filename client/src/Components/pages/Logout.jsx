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
        navigate('/login');
      })
      .catch(error => {
        console.error('Logout failed:', error);
        setLogoutMessage('Logout failed. Please try again.');
      });
  };

  return (
    <div>
      {logoutMessage && <p>{logoutMessage}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
