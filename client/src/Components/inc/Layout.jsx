// Layout.jsx
import React from 'react';
import Nav from '../pages/Nav';
import Sidebar from '../pages/Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Student from '../pages/Student';
import Voucher from '../pages/Voucher';
import Grades from '../pages/Grades';
const Layout = ({onLogout, studentDetails,setStudentDetails}) => {
  return (
    <div>
      <Nav studentDetails={studentDetails} />
      <div className="flex">
        <Sidebar onLogout={onLogout}/>
        <div className=" w-full"> 
        <Routes>
        <Route path="student-info" element={<Student  studentDetails={studentDetails} setStudentDetails={setStudentDetails} />} />
          <Route path='voucher' element={<Voucher studentDetails={studentDetails} setStudentDetails={setStudentDetails} />} />
          <Route path='grades' element={<Grades studentDetails={studentDetails} setStudentDetails={setStudentDetails} />} />
          </Routes>
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default Layout;
