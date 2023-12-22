import React from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

function Student({ studentDetails }) {
  console.log('Image:', studentDetails.image);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
        {studentDetails ? (
          <div className="text-center">
            {studentDetails.image && (
              <div className="mb-4">
                <img
                  className="w-64 h-64 object-cover rounded-full mx-auto"
                  src={`${apiUrl}${studentDetails.image}`}
                  alt="Student Image"
                />
              </div>
            )}
            <div className="border-t mt-4 pt-4">
              <p className="text-xl font-bold text-gray-800 mb-2">Student Information</p>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">First name:</span>
                      {studentDetails.first_name || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">second name:</span>
                      {studentDetails.second_name || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">last name:</span>
                      {studentDetails.last_name || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">email:</span>
                      {studentDetails.email || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">year:</span>
                      {studentDetails.form.year || 'Not provided'}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Additional Information Categories */}
            <div className="border-t mt-4 pt-4">
              <p className="text-xl font-bold text-gray-800 mb-2">Additional Information</p>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Gender:</span>
                      {studentDetails.gender || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Additional Name:</span>
                      {studentDetails.additional_name || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Birthday:</span>
                      {studentDetails.birthday || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Education Level:</span>
                      {studentDetails.education_level || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Website:</span>
                      {studentDetails.website || 'Not provided'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Categories */}
            <div className="border-t mt-4 pt-4">
              <p className="text-xl font-bold text-gray-800 mb-2">Contact Information</p>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Mailing Address:</span>
                      {studentDetails.mailing_address || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Phone Number:</span>
                      {studentDetails.phone_number || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Business Fax Number:</span>
                      {studentDetails.business_fax_number || 'Not provided'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Information Categories */}
            <div className="border-t mt-4 pt-4">
              <p className="text-xl font-bold text-gray-800 mb-2">Job Information</p>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Company:</span>
                      {studentDetails.company || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Job Title:</span>
                      {studentDetails.job_title || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">Department:</span>
                      {studentDetails.department || 'Not provided'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center py-4">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Student;
