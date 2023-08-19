import React, { useState } from 'react'
import AuthenticatedPage from '../components/AuthenticatedPage'
import "../styles/profile.css"
import Button from '../components/Button'
import ProfileTopSection from '../components/ProfileTopSection'
import Invites from '../components/Invites'
import settings from "../assets/images/setting.svg"
import pen from "../assets/images/pen.svg"
import ProfileBottomSection from '../components/ProfileBottomSection'


function Profile() {
  const [showInviteBtn,setshowInviteBtn]=useState(true)


  function toggleBtn(){
    setshowInviteBtn(!showInviteBtn)
    
  }
  return (
    <AuthenticatedPage>
    <section className='profile-section width'>
      <h3>Profile</h3>

    <div className='profile-content-container height'>
    <ProfileTopSection name="Andrea" location="North End, Toronto, CA" icon1={settings} icon2={pen}/>
    <div className='profile-bottom-section profile-details'>
    {showInviteBtn?<ProfileBottomSection level='Beginner' availability='Thursday, Saturday, Sunday' time='09:00 - 12:00' seekingType='Partner, Opponent'/>:<Invites/>}
    </div>
    </div>


    <Button type='text' text={showInviteBtn?'Invites':'Return'} onclick={toggleBtn}/>
     
    </section>
    </AuthenticatedPage> 
  )
}

export default Profile
