import React from 'react'
import Layout from '../layout/Layout'
function AdminDashboard({setIsAdminLoggedIn}) {
  return (
    <div>
      <Layout setIsAdminLoggedIn={setIsAdminLoggedIn}/>
    </div>
  )
}

export default AdminDashboard