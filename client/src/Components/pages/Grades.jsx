import React from 'react';

const MAX_SCORE_A = 400;
const MIN_SCORE_B = 300;

function Grades({ studentDetails }) {
  const totalMarks = studentDetails.subjects.reduce((total, subject) => {
    return total + (subject.marks && subject.marks.length > 0 ? subject.marks[0].score : 0);
  }, 0);

  let grade = '';
  let circleColor = '';

  if (totalMarks > MAX_SCORE_A) {
    grade = 'A';
    circleColor = 'bg-green-500';
  } else if (totalMarks >= MIN_SCORE_B) {
    grade = 'B';
    circleColor = 'bg-yellow-500';
  } else {
    grade = 'C';
    circleColor = 'bg-brown-500';
  }

  return (
    <div className="m-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <h2 className="col-span-full text-3xl font-bold mb-4 text-center text-gray-500">End of Semester Exams</h2>
      {studentDetails.subjects.map((subject) => (
        <div key={subject.id} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {subject.name ? subject.name.toUpperCase() : 'Subject Name not available'}
            </h3>
            {subject.marks && subject.marks.length > 0 ? (
              <div className="flex justify-between">
                <p className="text-gray-600">Score:</p>
                <p className="text-indigo-700 font-semibold">{subject.marks[0].score}</p>
              </div>
            ) : (
              <p className="text-gray-500">No marks available</p>
            )}
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mt-4 text-indigo-800">Total Marks: {totalMarks}</p>
        <p className="text-lg font-semibold mt-4 text-indigo-800">Grade attained:</p>
        <div className={`flex justify-center items-center ${circleColor} rounded-full w-12 h-12 font-bold text-white mt-2`}>
          
          {grade}
        </div>
      </div>
    </div>
  );
}

export default Grades;
