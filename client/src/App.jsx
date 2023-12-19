import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Dashboard from './Components/pages/Dashboard';

function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <Router>
      <Routes>
     <Route path='/login' element={
      < Login onSuccessfulLogin={handleSuccessfulLogin} isLoggedIn={isLoggedIn} /> } />
    <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
