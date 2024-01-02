import React, { useState,useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import {  Navigate } from 'react-router-dom';

const InputField = ({ type, value,placeholder, onChange }) => {
  return (
    <input
      type={type}
      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete
      required
    />
  );
};

const Login = ({ isLoggedIn, onSuccessfulLogin, setStudentDetails }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const[toggleAdmin,setToggleAdmin] = useState(false)
  const[showMessage,setShowMessage] = useState(false)

  

  const handleToggleAdmin = () => {
    setToggleAdmin(!toggleAdmin); 
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const userDetailsString = localStorage.getItem('user_details');
    const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

    if (accessToken && userDetails) {
      onSuccessfulLogin(userDetails);
    }
  }, [onSuccessfulLogin]);

  const handlePassowrd = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setLoading(true);
    setErrorMessage([]);
    const userData = { email, password };
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorDetails) => {
            setErrorMessage([errorDetails.error]);
  
            throw new Error(errorDetails.error);
          });
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);

          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem('user_details', JSON.stringify(data));

          const mapData = (items, mapper) => items.map(mapper);

          const vouchers = mapData(data.vouchers, (voucher) => ({
            voucherAmount: voucher.voucher_amount,
            expiryDate: voucher.expiry_date,
          }));

          const subjects = mapData(data.subjects, (subject) => ({
            subjectName: subject.name,
          }));

          const fees = mapData(data.fees, (fee) => ({
            amount: fee.amount,
            dueDate: fee.due_date,
            paymentStatus: fee.payment_status,
          }));

          const teachers = mapData(data.teachers, (teacher) => ({
            firstName: teacher.first_name,
            lastName: teacher.last_name,
            email: teacher.email,
            department: teacher.department,
          }));

          const events = mapData(data.events, (event) => ({
            dueDate: event.due_date,
            message: event.message,
          }));

          const supports = mapData(data.supports, (support) => ({
            email: support.email,
            topic: support.topic,
            subject: support.subject,
            message: support.message,
          }));

          const notifications = mapData(data.notifications, (notification) => ({
            message: notification.message,
          }));

          const studentDetails = {
            first_name: data.first_name,
            second_name: data.second_name,
            last_name: data.last_name,
            email: data.email,
            form: data.form.year,
            image: data.image,
            vouchers,
            subjects,
            fees,
            teachers,
            events,
            supports,
            notifications,
          };


          onSuccessfulLogin(studentDetails);
          setStudentDetails(studentDetails);
          setShowMessage(true);
        }, 2000);
      })

      .catch((error) => {
        console.error("Login failed:", error);
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }


   
  
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
    
    
          <div className="md:w-1/3 max-w-sm">
            <p className="text-3xl font-semibold text-center">Building classrooms of Tomorrow</p>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
              alt="ERROR 404"
            />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-600">
                sign in
              </p>
            </div>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                use school email
              </p>
            </div>
            <InputField 
              type="email"
              value={email}
              placeholder="email@careercampus.ac.ke"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              
            />
            {errorMessage.length > 0 && (
              <div className="mt-4 text-red-500">
                {errorMessage.map((error, index) => (
                  <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
                    <p key={index} className='text-center'>{error}</p>
                    </div>
                ))}
              </div>
            )}
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" onClick={handlePassowrd}/>
                <span>Show password</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
            {loading ? (
                <div className="flex items-center justify-center">
                  <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
                </div>
              ) : (
                <div className="flex justify-center">
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                  onClick={handleLogin}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                </div>
              )}
            </div>
         
          </div>
    </section>
  );
  
              }
export default Login;