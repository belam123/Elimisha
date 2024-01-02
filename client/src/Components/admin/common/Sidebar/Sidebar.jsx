import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai';
import Logout from '../../auth/Logout/logout';
function Sidebar({setIsAdminLoggedIn}) {
  return (
    <div className='flex h-screen'>
        <div className='w-64 bg-white shadow-lg'>
            <div className='lex flex-col h-full overflow-y-auto pt-5'>
            <div className="flex flex-col justify-between h-full px-4">
             <div className='space-y-4'>
             <LinkButton icon={<AiOutlineUser />} text="Students" to="students" />
            </div>
            <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
                </div>
            </div>
        </div>
</div>
  );      
}
const LinkButton = ({ icon, text, to}) => (
<Link 
to={to}
className=""
>
    <span className=''>{icon}</span>
    <span className=''>{text}</span>
</Link>
       )

  
export default Sidebar