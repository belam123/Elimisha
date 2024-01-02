import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
function Logout({setIsAdminLoggedIn}) {
const navigate = useNavigate();

const handleLogout = () => {

    localStorage.removeItem('access_tokens');
    setIsAdminLoggedIn(false);

    axios.delete(`${apiUrl}/admins/logout`)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                navigate('/admin');
             console.log('Access tokens have been removed', localStorage.getItem('access_tokens') )
            }
        })
        .catch(error => {
            console.warn('Logout failed:', error)
        });
};
 return (
    <div>
        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout