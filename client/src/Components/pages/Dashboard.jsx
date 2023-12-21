import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../inc/Layout';

function Dashboard({ isLoggedIn , onLogout, studentDetails,setStudentDetails}) {


  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Layout isLoggedIn={isLoggedIn} onLogout={onLogout} studentDetails={studentDetails} setStudentDetails={setStudentDetails} />
    </>
  );
}

export default Dashboard; 
