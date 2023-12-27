import React from 'react'
const apiUrl = import.meta.env.VITE_API_URL;
function Nav({studentDetails}) {
    return (
  
      <div>
        <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
        <div className="bg-white">
          <div className="flex-col flex">
            <div className="w-full border-b-2 border-gray-200">
              <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
                <div>
                  <img  src="https://static.vecteezy.com/system/resources/previews/008/040/410/non_2x/school-logo-design-template-free-vector.jpg"
                    className="block btn- h-12 w-26" alt="" />
                </div>
              
                <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                  <div className="relative">
                    <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                  hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                      <span className="items-center justify-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewbox="0 0 456.147 456.147"
                          style={{ enableBackground: 'new 0 0 456.147 456.147' }}><g><path
                            d="M445.666,4.445c-4.504-4.858-11.756-5.954-17.211-2.19L12.694,290.14c-3.769,2.609-5.878,7.012-5.555,11.586 c0.323,4.574,3.041,8.635,7.139,10.686l95.208,47.607l37.042,86.43c1.78,4.156,5.593,7.082,10.064,7.727 c0.621,0.091,1.242,0.136,1.856,0.136c3.833,0,7.506-1.697,9.989-4.701l38.91-46.994l107.587,52.227 c1.786,0.867,3.725,1.306,5.663,1.306c1.836,0,3.674-0.393,5.384-1.171c3.521-1.604,6.138-4.694,7.146-8.432L448.37,18.128 C449.314,14.629,449.878,8.988,445.666,4.445z M343.154,92.883L116.681,334.604l-71.208-35.603L343.154,92.883z M162.003,416.703 l-27.206-63.48L359.23,113.665L197.278,374.771c-0.836,0.612-1.634,1.305-2.331,2.146L162.003,416.703z M312.148,424.651 l-88.604-43.014L400.427,96.462L312.148,424.651z" /></g></svg>
                      </span>
                    </p>
                  </div>
                  <div className="relative">
  <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
    hover:text-gray-900 focus:outline-none hover:bg-gray-100">
    <span className="justify-center items-center flex">
      <span className="justify-center items-center flex">
        <span className="items-center justify-center flex">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                  0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                  0H9"/>
          </svg>
        </span>
      </span>
    </span>
  </p>
  <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
    absolute -top-px -right-1">{studentDetails.notifications.length}</p>
</div>
                  <div className="justify-center items-center flex relative">
                    <img
                    src={studentDetails.image ? `${apiUrl}${studentDetails.image}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                    alt=""
                  /> 
                    <p className="font-semibold text-sm text-gray-500">{studentDetails.first_name} {studentDetails.last_name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
    );
  }
  
  export default Nav;