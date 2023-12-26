import React from 'react';

function Voucher({ studentDetails }) {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-600">Meal Coupon</h1>
        {studentDetails.vouchers.map((voucher) => (
          <div key={voucher.id} className="mb-6 border-b pb-4">
           <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-600 flex items-center">
                      <span className="font-bold mr-2">for:</span>
                      {studentDetails.first_name || 'Not provided'} 
                    </p>
                  </div>
            <p className="text-lg mb-2">
            Coupon remaining: {Math.round(voucher.voucher_amount / 90)}
            </p>
            <p className="text-gray-500">Expiry Date: {voucher.expiry_date}</p>
          </div>
        ))}
        {studentDetails.vouchers.length === 0 && (
          <p className="text-gray-500">No vouchers available.</p>
        )}
      </div>
    </div>
  );
}

export default Voucher;
