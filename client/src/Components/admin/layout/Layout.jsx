import React from 'react'
import Register from '../student/Register';
import Sidebar from '../common/Sidebar/Sidebar'
import { Outlet, Routes, Route } from 'react-router-dom';
function Layout({setIsAdminLoggedIn}) {

  const routeConfig = [
  {
    path: 'students',
    element: <Register />
  }
  ]
  return (
    <div className="flex flex-1">
        <Sidebar setIsAdminLoggedIn={setIsAdminLoggedIn}/>
<Routes>
{routeConfig.map((route, index) => (
  <Route
   key={index}
   path={route.path}
   element= {React.cloneElement(route.element)}
  />
))}
</Routes>
<Outlet />
    </div>
  )
}

export default Layout