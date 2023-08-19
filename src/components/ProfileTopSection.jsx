import React from 'react'
import locationIcon from "../assets/images/location.svg"
import "../styles/profile.css"

function ProfileTopSection({name,location,icon1,icon2}) {
  return (
   <>
    <div className='profile-top-section profile-details'>
    <div className='profile-name-section'>
     <p className='username'>{name}</p>
     <p className='user-location'><img src={locationIcon} alt='location icon' className='location-icon'/>{location}</p>
    </div>
    <div className='profile-edit-container'>
   <div><img src={icon1} alt= "profile icon"/></div>
   <div><img src={icon2} alt="profile icon"/></div>

    </div>
    </div>
    </>
  )
}

export default ProfileTopSection
