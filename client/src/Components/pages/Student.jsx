import React, { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

function Student({ isLoggedIn }) {
  const [fetchStudent, setFetchStudent] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = () => {
      const accessToken = sessionStorage.getItem('access_token');

      if (!accessToken) {
        return;
      }

      fetch(`${apiUrl}/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Fetch failed');
          }
        })
        .then((userData) => {
          setFetchStudent(userData);
        })
        .catch((error) => {
          console.error('Error fetching current user:', error);
        });
    };

    if (isLoggedIn) {
      fetchCurrentUser();
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        fetchStudent ? (
          <div>
            <p>{fetchStudent.first_name}</p>
          
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>Student is not logged in.</p>
      )}
    </div>
  );
}

export default Student;
