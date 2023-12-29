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


const Layout = ({ onLogout, studentDetails, setStudentDetails,handleToggle,buttonClass,buttonStyles,darkMode,handleToggleSidebar,isSidebarOpen,setSidebarOpen }) => {
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
     element: <DashboardContent studentDetails={studentDetails}   />
  }
  ];

  return (
    <div>

      <Nav studentDetails={studentDetails}  handleToggleSidebar={handleToggleSidebar}  />
      <div className="flex flex-1">
        <Sidebar onLogout={onLogout} handleToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="w-full p-4 md:pl-64">
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
