import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineDollar, AiOutlineAmazon, AiOutlineLogout, AiOutlineTeam, AiOutlineSetting } from 'react-icons/ai';


function Sidebar() {
  return (
    <div className="bg-gray h-screen flex">
      <div className="bg-white shadow-lg w-64">
        <div className="flex-col pt-5 flex overflow-y-auto">
          <div className="h-full flex-col justify-between px-4 flex">
            <div className="space-y-4">
              <LinkButton icon={<AiOutlineUser />} text="Student Information" to="/dashboard/student-info" />
              <LinkButton icon={<AiOutlineAmazon />} text="Voucher" to="/dashboard/voucher" />
              <LinkButton icon={<AiOutlineBook />} text="Grades" to="/dashboard/grades" />
              <LinkButton icon={<AiOutlineDollar />} text="Fees" to="/dashboard/fees" />
              <LinkButton icon={<AiOutlineTeam />} text="Teachers" to="/dashboard/teachers" />
              <LinkButton icon={<AiOutlineSetting />} text="Settings" to="/dashboard/settings" />
              <LinkButton icon={<AiOutlineLogout />} text="Logout" to="/dashboard/logout" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const LinkButton = ({ icon, text, to }) => (
  <Link to={to} className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer w-full text-left">
    <span className="justify-center items-center flex">
      {icon}
    </span>
    <span>{text}</span>
  </Link>
);

export default Sidebar;
