// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/auth/Login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import Admin from './Components/admin/auth/Login/Admin';
import AdminDashboard from './Components/admin/dashboard/AdminDashboard';
// import Navbar from './Components/Navbar';
import UserTypeSelection from './Components/UserType';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentDetails, setStudentDetails] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); 
  const [userType, setUserType] = useState(null);
  const handleSuccessfulLogin = (data) => {
    setIsLoggedIn(true);
    setStudentDetails(data);
    setUserType(userType);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUserType(userType);
  };

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
   <Router>
      {userType === null ? ( 
        <UserTypeSelection setUserType={setUserType} />
      ) : (
        <>
          <Routes>
        <Route
          path='/'
          element={<Login onSuccessfulLogin={handleSuccessfulLogin} isLoggedIn={isLoggedIn} setStudentDetails={setStudentDetails} />}
        />
        <Route
          path='/dashboard/*'
          element={<Dashboard isLoggedIn={isLoggedIn} onLogout={onLogout} studentDetails={studentDetails} handleToggle={handleToggle} darkMode={darkMode} handleToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />}
        />
        <Route
          path='/admin'
          element={<Admin setIsAdminLoggedIn={setIsAdminLoggedIn} />}
        />
        <Route
          path='/admin-dashboard/*'
          element={<AdminDashboard isAdminLoggedIn={isAdminLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn} />}
        />
        
        </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
