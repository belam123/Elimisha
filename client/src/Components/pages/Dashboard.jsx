import React from 'react';
import { Navigate } from 'react-router-dom';
import { LanguageProvider } from '../inc/LanguageContext';
import Layout from '../inc/Layout';


function Dashboard({ isLoggedIn, onLogout, studentDetails, setStudentDetails, handleToggle, darkMode }) {
  const buttonClass = darkMode ? 'bg-secondary text-primary' : 'bg-primary text-secondary';

  const buttonStyles = {
    boxShadow: `0px 2px 0px var(--color-${darkMode ? 'secondary' : 'primary'})`,
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <LanguageProvider>
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
          
        />
        
      </div>
    </LanguageProvider>
  );
}

export default Dashboard;
