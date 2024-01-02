import React from 'react'
import Sidebar from '../common/Sidebar/Sidebar'
function Layout({setIsAdminLoggedIn}) {
  return (
    <div>
        <Sidebar setIsAdminLoggedIn={setIsAdminLoggedIn}/>
    </div>
  )
}

export default Layout