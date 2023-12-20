import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../inc/Layout';

function Dashboard({ isLoggedIn }) {
  console.log('Dashboard rendered');

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Layout isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Dashboard;
