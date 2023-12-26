import React from 'react';

function Support() {
  return (
    <div className="flex justify-between p-8">
      <div className="w-1/2">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-2">Location university?</h1>
          <p className="mb-2 text-gray-600">Career Campus University-Africa</p>
          <p className='text-gray-600'>Murram Road, Thika Road Exit 12, Next to Hamila Gardens</p>
        </div>
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-2">Information About Us</h1>
          <a href="#" className="text-blue-500 underline hover:text-blue-700">University Website</a>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">Support</h2>
          <a href="mailto:help@careercampus.ac.ke" className="text-blue-500 hover:text-blue-700">help@careercampus.ac.ke</a>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">Our Offices</h1>
          <p className='italic text-gray-600'>Kenyatta Block, First Floor, Next to the Entrance</p>
          <p className='italic text-gray-600'>Jaramogi Block, Third Floor, Office Number 17</p>
          <p className='italic text-gray-600'>Moi Building, Ground Office, Office Number 2</p>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <h1 className="text-4xl font-bold mb-4">Still Need Help?</h1>
          <label className="block text-lg mb-2">Your Email Address (<span className="text-gray-500">So that we reply to you</span>)</label>
          <input type="email" className="w-full border p-2 mb-4" />
          <label className="block text-lg mb-2">Topic</label>
          <select className="w-full border p-2 mb-4">
            <option value="" disabled>Select One</option>
            <option value="">Credential Issues</option>
            <option value="">Dashboard Issues</option>
            <option value="">Grade Issues</option>
          </select>
          <label className="block text-lg mb-2">Subject</label>
          <input type="text" className="w-full border p-2 mb-4" />
          <label className="block text-lg mb-2">Message</label>
          <textarea className="w-full border p-2" rows="6"></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-2 hover:bg-blue-700">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Support;
