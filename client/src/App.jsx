// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Dashboard from './Components/pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [studentDetails, setStudentDetails] = useState(null);


   const handleSuccessfulLogin = (data) => {
    setIsLoggedIn(true);
    setStudentDetails(data);
    
  };
  
    const onLogout = () => {
      setIsLoggedIn(false)  
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
          element={<Dashboard isLoggedIn={isLoggedIn} onLogout={onLogout}  studentDetails={studentDetails} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
