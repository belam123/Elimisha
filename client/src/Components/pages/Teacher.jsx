import React from 'react';
import { HiOutlineMail, HiOutlineAcademicCap } from 'react-icons/hi';

function Teacher({ studentDetails }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <h1 className="col-span-full text-3xl font-bold mb-4 text-center text-gray-500">Instructors Inspiring Your Path</h1>
      {studentDetails.teachers.map((teacher) => (
        <div key={teacher.id} className="bg-white border p-6 rounded-md shadow-md flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">
            {teacher.first_name} {teacher.last_name}
          </h3>
          <p className="text-gray-600 mb-2">
            <HiOutlineMail className="inline mr-1 text-blue-500" />
            <a href={`mailto:${teacher.email}`} className="underline text-blue-500 hover:text-blue-700">{teacher.email}</a>
          </p>
          <p className="text-gray-600 mb-2">
            <HiOutlineAcademicCap className="inline mr-1 text-indigo-500" />
            Department: {teacher.department}
          </p>
          <p className="text-gray-600 mb-2">units:</p>
          {teacher.subjects && teacher.subjects.length > 0 ? (
            <ul className="list-none pl-0">
              {teacher.subjects.map((subject) => (
                <li key={subject.id} className="text-gray-700">
                  <HiOutlineAcademicCap className="inline mr-1 text-indigo-500" />
                  {subject.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No subjects available</p>
          )}
        </div>
      ))}
      {studentDetails.teachers.length === 0 && (
        <p className="col-span-full text-gray-600">
          No teachers currently available
        </p>
      )}
    </div>
  );
}

export default Teacher;
