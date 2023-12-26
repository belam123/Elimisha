import React from 'react';

function Fee({ studentDetails }) {
  const shouldShowPayNowButton = studentDetails.fees.some((fee) => fee.amount > 5);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 md:p-8 lg:p-10 xl:p-12 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
          Fee Details
        </h2>

        {studentDetails.fees.map((fee) => (
          <div key={fee.id} className="mb-6">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-700">
              Amount: ksh.{fee.amount}
            </p>
            <p className="text-sm text-gray-600">Due Date: {fee.due_date}</p>
            <p className={`text-sm ${fee.payment_status === 'cleared' ? 'text-green-500' : 'text-red-500'}`}>
              Payment Status: {fee.payment_status}
            </p>
          </div>
        ))}

        {studentDetails.fees.length === 0 && (
          <p className="text-gray-500">No fees are currently available for this student.</p>
        )}

        {shouldShowPayNowButton && (
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-700">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
}

export default Fee;
