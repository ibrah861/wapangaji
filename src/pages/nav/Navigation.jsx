import {React, useContext} from 'react'
import { Link } from 'react-router-dom';

import {Menu} from "./Menu"

import { authContext } from '../../useContext/AuthContext';

// IMAGE
import house_tax  from "./house_image.png" 
export const Navigation = () => {

  const { setOpenNavBar} = useContext(authContext)

  const CloseNav = () => {
    setOpenNavBar(true)
  }
  
  const logOut = () => {
    localStorage.removeItem("authToken");
    const currentpath = window.location.pathname
    window.location.reload( currentpath );
  }

  return (
    <div className='top_navigation'>
      <div className="top_navigation_contents">
        
        <div className="navigation_container">
          <div className="navigation_menu">
            <div className="menu_container" onClick={CloseNav}>
              <div className="menu_item"></div>
              <div className="menu_item"></div>
              <div className="menu_item"></div>
            </div>
          </div>

          <div className="navigation_links">
            <ul className='laptop_nav'>
              <Link to="/parent/user-dashboard">
              <li >Dashboard</li></Link>
              
              <Link to="/parent/user-payment">
              <li>Payment</li>
              </Link>
              
            </ul>
          </div>

          <div className="navigation_icon">
            <img src={house_tax} alt="navigation_icon" loading='lazy' width="25" height="25" />
          </div>


        </div>
      </div>
    </div>
  )
}
