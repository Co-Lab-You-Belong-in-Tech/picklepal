import React from 'react'


import "../styles/profile.css"
import { Outlet } from 'react-router-dom'
function Match() {
  return (
    <section className='match-section profile-section width'>
    <Outlet/>   
    </section>

  )
}

export default Match
