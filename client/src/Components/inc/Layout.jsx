import React, { useState } from 'react';
import Nav from '../pages/Nav';
import Sidebar from '../pages/Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Student from '../pages/Student';
import Voucher from '../pages/Voucher';
import Grades from '../pages/Grades';
import Fee from '../pages/Fee';
import Teacher from '../pages/Teacher';
import Calendar from '../pages/Calendar';

const Layout = ({ onLogout, studentDetails, setStudentDetails }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = {
    '2023-12-26': [{ id: 1, title: 'Assignment Due' }],
    '2023-01-1': [{ id: 2, title: 'Exam - Math' }, { id: 3, title: 'Club Meeting' }],
    '2023-12-31': [{ id: 4, title: 'Project Deadline' }],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const routesConfig = [
    {
      path: 'student-info',
      element: <Student />,
    },
    {
      path: 'voucher',
      element: <Voucher />,
    },
    {
      path: 'grades',
      element: <Grades />,
    },
    {
      path: 'fees',
      element: <Fee />,
    },
    {
      path: 'teachers',
      element: <Teacher />,
    },
    {
      path: 'calendar',
      element: <Calendar selectedDate={selectedDate} events={events} />,
    },
  ];

  return (
    <div>
      <Nav studentDetails={studentDetails} />
      <div className="flex">
        <Sidebar onLogout={onLogout} />
        <div className="w-full">
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={React.cloneElement(route.element, {
                  studentDetails,
                  setStudentDetails,
                })}
              />
            ))}
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
