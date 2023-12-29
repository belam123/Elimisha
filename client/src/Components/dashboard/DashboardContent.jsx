import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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

function DashboardContent({ studentDetails }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = studentDetails.subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lineChartData = {
    labels: filteredSubjects.map((subject) => subject.name),
    datasets: [
      {
        label: 'Overall performance Score (%)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
        data: filteredSubjects.map((subject) =>
          subject.marks && subject.marks.length > 0
            ? Math.floor((subject.marks[0].quiz_score + subject.marks[0].exam_score + subject.marks[0].assignment_score) / 3)
            : 0
        ),
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (Chart.helpers) {
        Chart.helpers.each(Chart.instances, (instance) => {
          instance.destroy();
        });
      }
    };
  }, []);

  return (
    <div className='p-4'>

      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg mb-6 text-white">
        <div className="max-w-3xl mx-auto flex items-center justify-between p-2">
          <div className="text-center">
            <p className="text-2xl font-bold">Hi {studentDetails.first_name},</p>
            <p className="text-sm">You've learned 80% of your courses</p>
            <p className="text-sm">Keep it up to secure a scholarship</p>
            <button className="mt-2 bg-white text-blue-500 py-1 px-2 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-300 text-sm">
              View Scholarships
            </button>
          </div>
          <div>
            <img className="w-32 h-32 object-cover rounded" src="/images/image1.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row'>

        <div className='bg-gray-100 p-4 mr-4 rounded-lg mb-4 sm:w-1/2'>
          <div className="flex flex-direction-column">
            <input
              type="text"
              placeholder="Search..."
              className="p-1 h-6 border border-gray-300 rounded mb-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="max-w-xs overflow-x-auto">
            <table className="w-full border divide-y divide-gray-200">
              <thead className="bg-indigo-500 text-white">
                <tr>
                  <th className="py-1 px-2 text-left">Unit Name</th>
                  <th className="py-1 px-2 text-left">Instructor</th>
                  <th className="py-1 px-2 text-left">Exam Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.map((subject, index) => (
                  <tr key={subject.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-1 px-2 text-sm">{subject.name}</td>
                    <td className="py-1 px-2 text-sm">{studentDetails.teachers.find(teacher => teacher.id === subject.teacher_id)?.first_name || 'N/A'}</td>
                    <td className="py-1 px-2 text-sm">
                      {subject.marks && subject.marks.length > 0 ? (
                        <span className={`text-gray-600 font-semibold ${getGradeColor(subject.marks[0].exam_score)}`}>{subject.marks[0].exam_score}%</span>
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

        <div className='p-4'>
          <Line
            data={lineChartData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
              },
              width: 300,
              height: 200,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
