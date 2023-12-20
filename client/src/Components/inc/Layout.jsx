// Layout.jsx
import React from 'react';
import Nav from '../pages/Nav';
import Sidebar from '../pages/Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Logout from '../pages/Logout';
import Student from '../pages/Student';
const Layout = ({ isLoggedIn }) => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className=" w-full"> 
        <Routes>
            <Route path="logout" element={<Logout />} />
            <Route path="student-info" element={<Student isLoggedIn={isLoggedIn} />} />
          </Routes>
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default Layout;
