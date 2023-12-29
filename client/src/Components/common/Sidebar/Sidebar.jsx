import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineDollar, AiOutlineTeam, AiOutlineSetting, AiOutlineCalendar, AiOutlineDashboard } from 'react-icons/ai';
import Logout from '../../auth/Logout/Logout';
import { BiHeadphone } from 'react-icons/bi';

function Sidebar({ onLogout, isSidebarOpen, setSidebarOpen }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div>
      {isSidebarOpen && (
        <div
          className={`flex absolute h-screen md:w-64 w-16 bg-gray-200 transition-all duration-300 ${
            !isSidebarOpen ? 'hide-sidebar' : ''
          }`}
          style={{ zIndex: 1000 }}
        >
          <div className="w-64 bg-white shadow-lg">
            <div className="flex flex-col h-full overflow-y-auto pt-5">
              <div className="flex flex-col justify-between h-full px-4">
                <div className="space-y-4">
                  <LinkButton icon={<AiOutlineUser />} text="Student Information" to="/dashboard/student-info" onClick={handleLinkClick} />
                  <LinkButton icon={<AiOutlineDashboard />} text="Dashboard" to="/dashboard" onClick={handleLinkClick} />
                  <LinkButton icon={<AiOutlineDollar />} text="Fees" to="/dashboard/fees" onClick={handleLinkClick} />
                  {/* <LinkButton icon={<AiOutlineTeam />} text="Teachers" to="/dashboard/teachers" onClick={handleLinkClick} /> */}
                  <LinkButton icon={<AiOutlineCalendar />} text="Calendar" to="/dashboard/calendar" onClick={handleLinkClick} />
                  <LinkButton icon={<AiOutlineSetting />} text="Settings" to="/dashboard/settings" onClick={handleLinkClick} />
                  <LinkButton icon={<BiHeadphone />} text="Support" to="/dashboard/support" onClick={handleLinkClick} />
                </div>
                <Logout onLogout={onLogout} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const LinkButton = ({ icon, text, to, onClick }) => (
  <Link
    to={to}
    className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
    onClick={onClick}
  >
    <span className="flex items-center justify-center">{icon}</span>
    <span>{text}</span>
  </Link>
);

export default Sidebar;
