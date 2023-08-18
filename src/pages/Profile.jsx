import React, { useState } from 'react'
import AuthenticatedPage from '../components/AuthenticatedPage'
import "../styles/profile.css"
import Button from '../components/Button'
import { NavLink, Outlet } from 'react-router-dom'
import Invites from '../components/Invites'
function Profile() {
  const [showInviteBtn,setshowInviteBtn]=useState(true)


  function toggleBtn(){
    setshowInviteBtn(!showInviteBtn)
    
  }
  return (
    <AuthenticatedPage>
    <section className='profile-section width'>
      <h3>Profile</h3>
      <div className='profile-section_content height'>
       <div className='profile-details_top'>PROFILE DETAILS</div>
       {showInviteBtn?
       <div className='profile-details_bottom profile_details'>DETAILS</div>:
      
      <Invites/>}
       </div>
    <Button type='text' text={showInviteBtn?'Invites':'Return'} onclick={toggleBtn}/>
     
    </section>
    </AuthenticatedPage> 
  )
}

export default Profile
