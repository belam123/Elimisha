import React from 'react';

function Grades({ studentDetails }) {
  return (
    <div className="m-4 p-2">
      {studentDetails.subjects.map((subject) => (
        <div key={subject.id} className="w-full shadow-lg p-10">
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            {subject.name ? (
              <p>{subject.name.toUpperCase()}</p>
            ) : (
              <p>Subject Name not available</p>
            )}
            {subject.marks && subject.marks.length > 0 ? (
              <ul>
                {subject.marks.map((mark) => (
                  <li key={mark.id}>{`Score: ${mark.score}`}</li>
                ))}
              </ul>
            ) : (
              <p>No marks available for this subject.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grades;
