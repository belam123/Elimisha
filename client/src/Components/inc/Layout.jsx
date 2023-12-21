// Layout.jsx
import React from 'react';
import Nav from '../pages/Nav';
import Sidebar from '../pages/Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Student from '../pages/Student';
const Layout = ({onLogout, studentDetails,setStudentDetails}) => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar onLogout={onLogout}/>
        <div className=" w-full"> 
        <Routes>
        <Route path="student-info" element={<Student  studentDetails={studentDetails} setStudentDetails={setStudentDetails} />} />
          
  
          </Routes>
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default Layout;
