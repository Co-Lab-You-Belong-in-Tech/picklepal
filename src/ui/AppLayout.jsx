import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../styles/layout.css"
import logo from '../assets/images/logo.svg'
import {BsList} from "react-icons/bs";
import pickleleft from '../assets/images/pickballeft.svg'
import pickleright from '../assets/images/pickbalright.svg'
import ProtectedRoute from '../components/ProtectedRoute';


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
        <p  className='logo nav-logo'><NavLink to='/'>Pickle Pals</NavLink></p>
        <ul className='desktop-ul'>
            <NavLink to="/">Home</NavLink>
            <ProtectedRoute to="/profile">Profile</ProtectedRoute>
            <ProtectedRoute to="/match">Match</ProtectedRoute>
            <ProtectedRoute to="/courts">Courts</ProtectedRoute>
        
        </ul>
        {/* MOBILE HARMUBURGER MENU */}
        <div className='mobile-hamburger-menu'>
        <BsList style={iconStyles}onClick={toggleMenu} />   
        {menu&&<ul className={`mobile-ul ${menu?'bottom-border':""}`}>
            <NavLink to="/">Home</NavLink>
            <ProtectedRoute to="/profile">Profile</ProtectedRoute>
            <ProtectedRoute to="/match">Match</ProtectedRoute>
            <ProtectedRoute to="/courts">Courts</ProtectedRoute>
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
