import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
const apiUrl = import.meta.env.VITE_API_URL;

function Nav({ studentDetails }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };
  
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200">
            <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/008/040/410/non_2x/school-logo-design-template-free-vector.jpg"
                  className="block btn- h-12 w-26"
                  alt=""
                />
              </div>

              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                <div className="relative">
                  <p
                    onClick={handleNotificationClick}
                    className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                    hover:text-gray-900 focus:outline-none hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="items-center justify-center flex"></span>
                  </p>
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                      {studentDetails.notifications.map((notification, index) => (
                        <div key={index} className="p-2">
                          <p>{notification.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <p
                    className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                      hover:text-gray-900 focus:outline-none hover:bg-gray-100 cursor-pointer"
                    onClick={handleNotificationClick}
                  >
                    <span className="items-center justify-center flex">
                      <AiOutlineBell size={24} />
                    </span>
                  </p>
                  <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex absolute -top-px -right-1">
                    {studentDetails.notifications.length}
                  </p>
                </div>
                <div className="justify-center items-center flex relative">
                  <img
                    src={
                      studentDetails.image
                        ? `${apiUrl}${studentDetails.image}`
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    }
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                    alt=""
                  />
                  <p className="font-semibold text-sm text-gray-500">
                    {studentDetails.first_name} {studentDetails.last_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
