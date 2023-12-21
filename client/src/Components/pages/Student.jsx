// Student.jsx
import React from 'react';

function Student({ studentDetails }) {


  return (
    <div>
      {studentDetails ? (
        <div>
          <p>{studentDetails.first_name}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Student;
