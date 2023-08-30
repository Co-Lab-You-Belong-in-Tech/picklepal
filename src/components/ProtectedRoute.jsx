import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../styles/layout.css"
import { useSelector } from 'react-redux'

function ProtectedRoute({children,to}) {
const isAuth=useSelector((state)=>state.user.isAuth)
const location=useLocation()
const isActive=location.pathname===to
  return (

    <NavLink to={to} className={isAuth && isActive ? 'current-active':""}>
        {children}
    </NavLink>
 
  )
}

export default ProtectedRoute
