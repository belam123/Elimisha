import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
     <li>
        <Link to='/admin'>Admin</Link>
     </li>
     <li><Link to='/'>Login</Link></li>
    </div>
  )
}


export default Navbar