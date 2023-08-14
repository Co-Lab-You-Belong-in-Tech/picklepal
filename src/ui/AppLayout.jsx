import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../styles/layout.css"
import logo from '../assets/images/logo.svg'
import {BsList} from "react-icons/bs";
import pickleleft from '../assets/images/pickballeft.svg'
import pickleright from '../assets/images/pickbalright.svg'


function AppLayout() {
  const [menu,setMenu]=useState(false)
  function toggleMenu(){
  setMenu(!menu)
  }
  
  const iconStyles = {
    fontSize: '4.5rem',
    fontWeight:'bolder', 
    color: 'var(--green)',   
    borderRadius:'5px',
    boxShadow: '0 1.5px 3px 0 #000000',
  };
  return (
    <div className='app-layout'>
      <nav className={`${menu?'':"bottom-border"}`}>
        <div className='logo-container'><img src={logo} alt='picklepals logo' className='nav-logo'/></div>
        <ul className='desktop-ul'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to='match'>Match</NavLink>
            <NavLink to='courts'>Courts</NavLink>
        </ul>
        {/* MOBILE HARMUBURGER MENU */}
        <div className='mobile-hamburger-menu'>
        <BsList style={iconStyles}onClick={toggleMenu} />   
        {menu&&<ul className={`mobile-ul ${menu?'bottom-border':""}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to="match">Match</NavLink>
            <NavLink to="courts">Courts</NavLink>
        </ul>}
        </div>
      </nav>

   <Outlet/>
    <div><img src={pickleleft} alt='pickleball black illustration' className='left-ball ball'/></div> 
    <div><img src={pickleright} alt='pickleball black illustration' className='right-ball ball'/></div> 
  
    </div>
  )
}

export default AppLayout
