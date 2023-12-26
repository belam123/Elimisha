import React from 'react';
import Nav from '../pages/Nav';
import Sidebar from '../pages/Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Student from '../pages/Student';
import Voucher from '../pages/Voucher';
import Grades from '../pages/Grades';
import Fee from '../pages/Fee';
import Teacher from '../pages/Teacher';

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
  }
];

const Layout = ({ onLogout, studentDetails, setStudentDetails }) => {
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
