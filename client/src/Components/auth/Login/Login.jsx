import React, { useState,useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
import {  Navigate } from 'react-router-dom';



const Login = ({ isLoggedIn, onSuccessfulLogin, setStudentDetails }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);

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

        console.log("Student details:", studentDetails);

        onSuccessfulLogin(studentDetails);
        setStudentDetails(studentDetails);
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
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
        alt="ERROR 404"
      />
    </div>
    <div className="md:w-1/3 max-w-sm">
      <div className="text-center md:text-left">
        <p className="text-lg font-bold mb-2 ">Welcome to Career Campus</p>
        <p className="text-sm text-gray-600">
          Please sign in to your account.
        </p>
      </div>
      <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
          use school email
        </p>
      </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage.length > 0 && (
  <div className="mt-4 text-red-500">
    {errorMessage.map((error, index) => (
      <p key={index}>{error}</p>
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
            <div className="spinner-border text-blue-600" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={handleLogin}
            >
              {loading ? 'Logging in...': 'login'}
            </button>
          )}
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already an admin?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Admin Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;