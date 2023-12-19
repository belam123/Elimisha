import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Logout from './Logout';

function Dashboard() {
  return (
    <div>
        <h1>Welcome world</h1>
      <Outlet />
      <Routes>
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
