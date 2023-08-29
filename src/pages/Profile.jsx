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
  const userData=JSON.parse(sessionStorage.getItem('user_info'))
  const {firstName,location,level,availability_day,availability_time,seeking_type}=userData
  
  return (
    <AuthenticatedPage>
    <section className='profile-section width'>
    <h3>Profile</h3>
    <div className='profile-content-container height'>
    <ProfileTopSection name={firstName} location={location} icon1={settings} icon2={pen}/>
    <div className='profile-bottom-section profile-details'>
    {showInviteBtn?<ProfileBottomSection level={level} availability={availability_day.join(", ")} time={`${availability_time.start + '-'+availability_time.end}`} seekingType={seeking_type.join(', ')}/>:<Invites/>}
    </div>
    </div>
    <Button type='text' text={showInviteBtn?'Invites':'Return'} onclick={toggleBtn}/> 
    </section>
    </AuthenticatedPage> 
  )
}

export default Profile
