// Layout.jsx

import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { Outlet, Routes, Route } from 'react-router-dom';
import Logout from './Logout';
const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className=" w-full"> 
        <Routes>
            <Route path="logout" element={<Logout />} />
        
            {/* Add other routes as needed */}
          </Routes>
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default Layout;
