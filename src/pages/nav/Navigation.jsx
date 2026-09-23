import React from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
  
  const logOut = () => {
    localStorage.removeItem("authToken");
    const currentpath = window.location.pathname
    window.location.reload( currentpath );
  }

  return (
    <div className='nav'>
      <div className="logoimg">
        Logo
      </div>
      <nav>
        <ul>
          <Link to="/user-dashboard">
          <li>Dashboard</li>
          </Link>

          <Link to ="/user-profile">
            <li>Profile</li>
          </Link>
          
          
          <li>Notification</li>
          <li>Payment</li>
        </ul>
      </nav>

      <div className="logout-button">
      <button onClick={logOut}>Logout</button>
   
      </div>
    </div>
  )
}
