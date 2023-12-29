import React from 'react';
import { Navigate } from 'react-router-dom';

import Layout from '../layout/Layout';


function Dashboard({ isLoggedIn, onLogout, studentDetails, setStudentDetails, handleToggle, darkMode, handleToggleSidebar,isSidebarOpen,setSidebarOpen }) {
  const buttonClass = darkMode ? 'bg-secondary text-primary' : 'bg-primary text-secondary';

  const buttonStyles = {
    boxShadow: `0px 2px 0px var(--color-${darkMode ? 'secondary' : 'primary'})`,
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (

      <div className={darkMode ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}>
        <Layout
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
          studentDetails={studentDetails}
          setStudentDetails={setStudentDetails}
          handleToggle={handleToggle}
          buttonClass={buttonClass}
          buttonStyles={buttonStyles}
          darkMode={darkMode}
          isSidebarOpen={isSidebarOpen}
          handleToggleSidebar={handleToggleSidebar}
          setSidebarOpen={setSidebarOpen}
        />
        
      </div>
 
  );
}

export default Dashboard;
