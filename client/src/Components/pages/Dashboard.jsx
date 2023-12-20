import React from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';
import Logout from './Logout';
import Layout from './Layout';
import Grades from './Grades';

function Dashboard({isLoggedIn}) {
  console.log('Dashboard rendered')

  if(!isLoggedIn){
    <Navigate to='/' />
  }
  return (
  
   <>
   <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <div className="dashboard-content flex-grow p-6">
              <h1>Welcome to the Dashboard</h1>
              <Outlet />
            </div>
          }
        >
          <Route index element={<Grades />} />
          {/* <Route path="student-info" element={<StudentInfo />} />
          <Route path="voucher" element={<Voucher />} />
          <Route path="grades" element={<Grades />} />
          <Route path="fees" element={<Fees />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="settings" element={<Settings />} /> */}
   
        </Route>
      </Routes>
    </Layout>
    </>
  )
}

export default Dashboard;
