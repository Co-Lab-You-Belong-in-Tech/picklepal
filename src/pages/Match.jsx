import React from 'react'

import AuthenticatedPage from '../components/AuthenticatedPage'

import "../styles/profile.css"
import { Outlet } from 'react-router-dom'
function Match() {
  return (
    <AuthenticatedPage>
    <section className='match-section profile-section width'>
    <Outlet/>   
    </section>
    </AuthenticatedPage> 
  )
}

export default Match
