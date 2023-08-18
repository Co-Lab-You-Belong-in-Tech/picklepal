import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../styles/layout.css"

function ProtectedRoute({children,to}) {
const isAuth=true;
const location=useLocation()
const isActive=location.pathname===to
console.log(isActive)
  return (
    <NavLink to={to} className={isAuth && isActive ? 'current-active':""}>
        {children}
    </NavLink>
  )
}

export default ProtectedRoute
