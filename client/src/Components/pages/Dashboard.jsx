import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Logout from './Logout';
import Layout from './Layout';
function Dashboard() {
  return (
    <div>
   
 <Layout />
      <Outlet />
      <Routes>
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
