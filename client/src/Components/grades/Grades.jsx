import React from 'react';

function getGradeColor(percentage) {
  if (percentage >= 90) {
    return 'text-green-500';
  } else if (percentage >= 80) {
    return 'text-lightgreen-500';
  } else if (percentage >= 70) {
    return 'text-yellow-500';
  } else if (percentage >= 60) {
    return 'text-orange-500';
  } else if (percentage >= 50) {
    return 'text-brown-500';
  } else {
    return 'text-red-500';
  }
}

function Grades({ studentDetails }) {


  return (
    <div className="m-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-500">Your Grades</h2>
      {studentDetails.subjects.map((subject) => (
        <div key={subject.id} className="mb-4 bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {subject.name ? subject.name.toUpperCase() : 'Subject Name not available'}
            </h3>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            </div>
            {subject.marks && subject.marks.length > 0 ? (
              <div className="flex flex-col">
                <div className={`bg-gray-100 p-4 rounded-lg ${getGradeColor(subject.marks[0].exam_score)}`}>
                  <div className="flex justify-between">
                    <p className={`text-gray-700 font-semibold ${getGradeColor(subject.marks[0].exam_score)}`}>Exam score:</p>
                    <p className={`text-gray-600 font-semibold ${getGradeColor(subject.marks[0].exam_score)}`}>{subject.marks[0].exam_score}%</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={`text-gray-700 font-semibold ${getGradeColor(subject.marks[0].assignment_score)}`}>Assignment score:</p>
                    <p className={`text-gray-600 font-semibold ${getGradeColor(subject.marks[0].assignment_score)}`}>{subject.marks[0].assignment_score}%</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={`text-gray-700 font-semibold ${getGradeColor(subject.marks[0].quiz_score)}`}>Quiz score:</p>
                    <p className={`text-gray-600 font-semibold ${getGradeColor(subject.marks[0].quiz_score)}`}>{subject.marks[0].quiz_score}%</p>
                  </div>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700 font-semibold">Total:</p>
                  <div className={`bg-gray-100 p-4 rounded-lg flex align-center`}>
                    <p className={`text-indigo-700 font-semibold h-3 ${getGradeColor((subject.marks[0].quiz_score + subject.marks[0].exam_score + subject.marks[0].assignment_score) / 3)}`}>
                      {Math.floor((subject.marks[0].quiz_score + subject.marks[0].exam_score + subject.marks[0].assignment_score) / 3)}%
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No marks available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grades;
