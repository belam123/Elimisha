import React from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

function Student({ studentDetails }) {
  console.log('Image:', studentDetails.image);
  return (
    <div>
      {studentDetails ? (
        <div>
          <p>
            
            {studentDetails.image && (
<img src={`${apiUrl}${studentDetails.image}`} alt="Student Image" />

            )}
            <span>first name:</span>
            {studentDetails.first_name}
          </p>
          <p>
            <span>second name:</span>
            {studentDetails.second_name}
          </p>
          <p>
            <span>last name:</span>
            {studentDetails.last_name}
          </p>
          <p>
            <span>email:</span>
            {studentDetails.email}
          </p>
          <p>
            <span>Form:</span>
            {studentDetails.form_id}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Student;
