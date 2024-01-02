import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const InputField = ({ type, value, onChange, placeholder }) => (
  <input
    className="border border-gray-300 p-2 w-full mt-5"
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleStudent, setToggleStudent] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleStudentToggle = () => {
    setToggleStudent(!toggleStudent);
  };
  useEffect(() => {
    const accessTokens = localStorage.getItem('access_tokens');

  
    if (accessTokens !== null) {

      setIsAdminLoggedIn(true);
    } else {
      //
    }
  }, []);
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const details = { email, password };

    setLoading(true);

    axios
      .post(`${apiUrl}/admins/login`, details)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setIsAdminLoggedIn(true);
           localStorage.setItem('access_tokens', response.data.access_tokens);
           console.log('Tokens stored:', localStorage.getItem('access_tokens'));
           localStorage.setItem('admin_details', JSON.stringify(response.data.admin_details));
         
          console.log(response)
        } else {
          console.log('Login failed. Status:', response.status);
        }
      })
      .catch((error) => {
        setErrorMessage([error.message]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (isAdminLoggedIn){
    return <Navigate to='/admin-dashboard' />
  }
  return (
    
        <>
           <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="https://www.shutterstock.com/image-vector/university-education-logo-design-260nw-670576681.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address <span className='text-indigo-700'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password <span className='text-indigo-700'>*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" onClick={handlePassword}/>
                <span>Show password</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            {errorMessage.length > 0 && (
              <div className="mt-4 text-red-500">
                {errorMessage.map((error, index) => (
                  <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
                    <p key={index} className='text-center'>{error}</p>
                    </div>
                ))}
              </div>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleAdminLogin}
              >
                Sign in
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </>
  )
}

export default Admin;
