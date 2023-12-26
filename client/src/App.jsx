// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Dashboard from './Components/pages/Dashboard';
import { LanguageProvider } from './Components/inc/LanguageContext';
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
      <LanguageProvider>
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
      </LanguageProvider>
    </Router>
  );
}

export default App;
