import React, { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

function Student({ isLoggedIn }) {
  const [fetchStudent, setFetchStudent] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = () => {
      // Get student_id from session
      const studentId = sessionStorage.getItem('student_id');

      if (!studentId) {
        console.error('Student ID not found in session.');
        return;
      }

      fetch(`${apiUrl}/me`, {
        method: 'GET',
        credentials: 'include', // Include credentials such as cookies for session-based authentication
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.error('Failed to fetch current user:', response.statusText);
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

    // Fetch current user only if logged in
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
            {/* Add other student details here */}
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
