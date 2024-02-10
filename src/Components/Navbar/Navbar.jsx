import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/shopify.png'
import nav_profile from '../../assets/nav_profile.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo}  alt="" className="nav-logo" />
   
      <img src={nav_profile} className='nav-profile' alt="" />
    </div>
    
  )
}

export default Navbar
