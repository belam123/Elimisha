import React, { useState } from 'react';
import { useLanguage } from '../inc/LanguageContext';

function Settings({ handleToggle, buttonClass, buttonStyles, darkMode }) {
  const { selectedLanguage, handleLanguageChange } = useLanguage();
  const [emailToggle, setEmailToggle] = useState(true);
  const [notificationToggle, setNotificationToggle] = useState(true);
  const [examsToggle, setExamsToggle] = useState(true);
  const [assignmentsToggle, setAssignmentsToggle] = useState(true);
  const [messagesToggle, setMessagesToggle] = useState(true);
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: 'Chinese' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'sw', name: 'Swahili' },
    { code: 'es', name: 'Spanish' },
    { code: 'ja', name: 'Japanese' },
    { code: 'it', name: 'Italian' },
  ];

  return (
    <div>
      <h1 className='font-semibold text-xl underline text-center mb-4'>Theme settings</h1>
      <div className="flex items-center justify-center">
        <label htmlFor="toggle" className="mr-2 text-sm text-gray-600">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            style={buttonStyles}
            onClick={handleToggle}
          />
          <label
            htmlFor="toggle"
            className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${buttonClass}`}
          ></label>
        </div>
        <label htmlFor="toggle" className="text-sm text-gray-600">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </label>
      </div>

      <h1 className='font-semibold text-xl text-center underline mt-4'>Notification preferences</h1>
      <div className="mt-6 space-y-4 p-14">
        {/* Email Toggle */}
        <div className="flex items-center justify-between">
          <span>Email</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={emailToggle}
              onChange={() => setEmailToggle(!emailToggle)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Notification Toggle */}
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificationToggle}
              onChange={() => setNotificationToggle(!notificationToggle)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Exams Toggle */}
        <div className="flex items-center justify-between">
          <span>Exams</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={examsToggle}
              onChange={() => setExamsToggle(!examsToggle)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Assignments Toggle */}
        <div className="flex items-center justify-between">
          <span>Assignments</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={assignmentsToggle}
              onChange={() => setAssignmentsToggle(!assignmentsToggle)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Messages Toggle */}
        <div className="flex items-center justify-between">
          <span>Messages</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={messagesToggle}
              onChange={() => setMessagesToggle(!messagesToggle)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <h1 className='font-semibold text-xl text-center underline mt-4'>Language preferences</h1>
      <div className="mt-6 space-y-4">
        <fieldset>
          <legend className="sr-only">Language Preferences</legend>
          <div className="flex flex-wrap justify-center">
            {languages.map((lang) => (
              <div key={lang.code} className="flex flex-col items-center mx-4 my-2">
                <span className="text-sm text-gray-600">{lang.name}</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={selectedLanguage === lang.code}
                    onChange={() => handleLanguageChange(lang.code)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Settings;
