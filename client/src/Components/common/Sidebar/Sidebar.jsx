import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineDollar, AiOutlineAmazon, AiOutlineLogout, AiOutlineTeam, AiOutlineSetting, AiOutlineCalendar, AiOutlineTable } from 'react-icons/ai';
import Logout from '../../auth/Logout/Logout';
import { BiHeadphone } from 'react-icons/bi';

function Sidebar({ onLogout }) {
  return (
    <div className="flex h-screen bg-gray">
      <div className="w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full overflow-y-auto pt-5">
          <div className="flex flex-col justify-between h-full px-4">
            <div className="space-y-4">
              <LinkButton icon={<AiOutlineUser />} text="Student Information" to="/dashboard/student-info" />
              <LinkButton icon={<AiOutlineTable />} text="Voucher" to="/dashboard/voucher" />
              <LinkButton icon={<AiOutlineBook />} text="Grades" to="/dashboard/grades" />
              <LinkButton icon={<AiOutlineDollar />} text="Fees" to="/dashboard/fees" />
              {/* <LinkButton icon={<AiOutlineTeam />} text="Teachers" to="/dashboard/teachers" /> */}
              <LinkButton icon={<AiOutlineCalendar />} text="Calendar" to="/dashboard/calendar" />
              <LinkButton icon={<AiOutlineSetting />} text="Settings" to="/dashboard/settings" />
              <LinkButton icon={<BiHeadphone />} text="Support" to="/dashboard/support" />
            </div>
            <Logout onLogout={onLogout} />
          </div>
        </div>
      </div>
    </div>
  );
}

const LinkButton = ({ icon, text, to }) => (
  <Link to={to} className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
    <span className="flex items-center justify-center">{icon}</span>
    <span>{text}</span>
  </Link>
);

export default Sidebar;
