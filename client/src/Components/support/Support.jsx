import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const InputField = ({ label, type, value, onChange, children }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-2 text-indigo-700">{label}</label>
    {type === 'select' ? (
      <select className="w-full border p-2 mb-4" value={value} onChange={onChange}>
        {children}
      </select>
    ) : type === 'textarea' ? (
      <textarea className="w-full border p-2" rows="4" value={value} onChange={onChange}></textarea>
    ) : (
      <input type={type} className="w-full border p-2" value={value} onChange={onChange} />
    )}
  </div>
);

function Support() {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [student_id, settId] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = () => {
    const details = { email, topic, subject, message, student_id };

    axios.post(`${apiUrl}/supports`, details)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          setFeedback({ text: 'Message sent successfully', color: 'green' });
        } else {
          setFeedback({ text: 'Failed to send message', color: 'red' });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setFeedback({ text: 'Failed to send message', color: 'red' });
      })
      .finally(() => {
        setTimeout(() => {
          setFeedback(null);
        }, 2000);
      });

    setEmail('');
    setTopic('');
    setMessage('');
    setSubject('');
    settId('');
  };

  return (
    <div className="flex flex-wrap p-8">
      <div className="w-full lg:w-1/2 space-y-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Location university?</h1>
          <p className="text-gray-600">Career Campus University-Africa</p>
          <p className="text-gray-600">Murram Road, Thika Road Exit 12, Next to Hamila Gardens</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Information About Us</h1>
          <a href="#" className="text-blue-500 underline hover:text-blue-700">University Website</a>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">Support</h2>
          <a href="mailto:help@careercampus.ac.ke" className="text-blue-500 hover:text-blue-700">help@careercampus.ac.ke</a>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Our Offices</h1>
          <p className="italic text-gray-600">Kenyatta Block, First Floor, Next to the Entrance</p>
          <p className="italic text-gray-600">Jaramogi Block, Third Floor, Office Number 17</p>
          <p className="italic text-gray-600">Moi Building, Ground Office, Office Number 2</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Still Need Help?</h1>
          <InputField label="Your Email Address (So that we reply to you)" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField label="Topic" type="select" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="" disabled>Select One</option>
            <option value="credential">Credential Issues</option>
            <option value="dashboard">Dashboard Issues</option>
            <option value="grade">Grade Issues</option>
          </InputField>
          <InputField label="Subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <InputField label="Admission number" type="text" value={student_id} onChange={(e) => settId(e.target.value)} />
          <InputField label="Message" type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button
            className={`bg-blue-500 text-white px-6 py-3 rounded-md mt-2 hover:bg-blue-700`}
            onClick={handleSubmit}
          >
            Send
          </button>
          {feedback && (
            <p style={{ color: feedback.color, marginTop: '8px' }} className='text-center'>{feedback.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Support;