// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/auth/Login/Login';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [studentDetails, setStudentDetails] = useState(null);
   const[darkMode,setDarkMode] = useState(false)

   const handleSuccessfulLogin = (data) => {
    setIsLoggedIn(true);
    setStudentDetails(data);
    
  };
  
    const onLogout = () => {
      setIsLoggedIn(false)  
  }
  
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }


  return (
    <Router>

      <Routes>
        <Route
          path='/'
          element={<Login onSuccessfulLogin={handleSuccessfulLogin} isLoggedIn={isLoggedIn} setStudentDetails={setStudentDetails}/>}
        />
        <Route
          path='/dashboard/*'
          element={<Dashboard isLoggedIn={isLoggedIn} onLogout={onLogout}  studentDetails={studentDetails} handleToggle={handleToggle}  darkMode={darkMode}/>}
        />
      </Routes>
     
    </Router>
  );
}

export default App;
