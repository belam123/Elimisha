import React, { useState } from 'react';
import Nav from '../common/Nav/Nav';
import Sidebar from '../common/Sidebar/Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Student from '../student/Student'
import Grades from '../grades/Grades';
import Fee from '../fees/Fee';
import Teacher from '../teacher/Teacher';
import Calendar from '../calendar/Calendar';
import Support from '../support/Support';
import Settings from '../settings/Settings';
import Voucher from '../voucher/Voucher';
import DashboardContent from '../dashboard/DashboardContent';


const Layout = ({ onLogout, studentDetails, setStudentDetails,handleToggle,buttonClass,buttonStyles,darkMode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());


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
      element: <Calendar selectedDate={selectedDate} studentDetails={studentDetails} />,
    },
    {
     path: 'settings',
     element:<Settings handleToggle={handleToggle} buttonClass={buttonClass} buttonStyles={buttonStyles}  darkMode={darkMode} />
    },
    {
      path: 'support',
      element: <Support />
    },
    {path: '/',
     element: <DashboardContent />
  }
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
