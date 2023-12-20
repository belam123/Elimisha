// Layout.jsx

import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
