import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAlipay, AiOutlineBook, AiOutlineCalendar, AiOutlineHome, AiOutlineLogout, AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai';
import Logout from '../../auth/Logout/logout';

function Sidebar({ setIsAdminLoggedIn }) {
  return (
    <div className='flex h-screen'>
      <div className='w-64 bg-indigo-700 shadow-lg overflow-hidden'>
        <div className='flex flex-col h-full pt-5'>
          <div className="flex flex-col justify-between h-full px-4">
            <div className='space-y-4'>
              <LinkButton icon={<AiOutlineHome />} text="Home" to="home" />
              <LinkButton icon={<AiOutlineUser />} text="Students" to="students" />
              <LinkButton icon={<AiOutlineCalendar />} text="Calendar" to="calendar" />
              <LinkButton icon={<AiOutlineAlipay />} text="Fees" to="fees" />
              <LinkButton icon={<AiOutlineBook />} text="Grades" to="grades" />
              <LinkButton icon={<AiOutlineUser />} text="Admin Home" to="admin-home" />
              <LinkButton icon={<AiOutlineCalendar />} text="Schedule" to="schedule" />
              <LinkButton icon={<AiOutlineBook />} text="Reports" to="reports" />
              <LinkButton icon={<AiOutlineLogout />} text="Logout" to="logout"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LinkButton = ({ icon, text, to }) => (
  <Link
    to={to}
    className='flex items-center space-x-2 py-2 px-4 text-gray-300 hover:bg-green-600 hover:text-white transition duration-300 rounded-lg'
  >
    <span className='text-xl'>{icon}</span>
    <span className=''>{text}</span>
  </Link>
);

export default Sidebar;
