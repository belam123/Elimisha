import React, { useState } from 'react';

function DashboardContent({ studentDetails }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = studentDetails.subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-6'>


      <div className="bg-gray-100 p-1 rounded-lg mb-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-2">
          <div className="text-center">
            <p className="text-lg font-bold">Hi {studentDetails.first_name},</p>
            <p className="text-gray-600">You have learned 80% of your courses</p>
            <p className="text-gray-600">Keep it up and improve your grades to get a scholarship</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              View Result
            </button>
          </div>
          <div>
            <img className="w-64 h-64 object-cover rounded" src="/images/image1.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className='flex'>

  <div className='bg-gray-100 p-6 mr-4'>
    <div className="flex flex-direction-column ">
      <h2 className='text-indigo-700 text-2xl underline'>Your Courses</h2>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 h-8 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="max-w-2xl overflow-x-auto">
      <table className="w-full border divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-1 px-2 text-left text-indigo-700 text-sm">Unit Name</th>
            <th className="py-1 px-2 text-left text-indigo-700 text-sm">Instructor</th>
            <th className="py-1 px-2 text-left text-indigo-700 text-sm">Current Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubjects.map((subject) => (
            <tr key={subject.id}>
              <td className="py-1 px-2 text-sm">{subject.name}</td>
              <td className="py-1 px-2 text-sm">{studentDetails.teachers.find(teacher => teacher.id === subject.teacher_id)?.first_name || 'N/A'}</td>
              <td className="py-1 px-2 text-sm">
                {subject.marks && subject.marks.length > 0 ? (
                  <span className="text-indigo-700 font-semibold">{subject.marks[0].score}</span>
                ) : (
                  <span className="text-gray-500">No marks available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>


  <div className='bg-gray-100 p-6 rounded-lg h-auto'>
  <ul className="text-2xl font-semibold mb-4 ">What's Next</ul>
  <li className="text-gray-700 list-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel mauris ut turpis hendrerit tincidunt.</li>
  <li className="text-gray-700 list-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel mauris ut turpis hendrerit tincidunt.</li>
  <li className="text-gray-700 list-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel mauris ut turpis hendrerit tincidunt.</li>
  <li className="text-gray-700 list-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel mauris ut turpis hendrerit tincidunt.</li>
</div>
</div>


    </div>
  );
}

export default DashboardContent;
