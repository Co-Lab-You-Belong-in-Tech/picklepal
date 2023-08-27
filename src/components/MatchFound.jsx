import React from 'react'
import ProfileTopSection from '../components/ProfileTopSection'
import ProfileBottomSection from '../components/ProfileBottomSection'
import mail from "../assets/images/mail.svg"
import cancel from '../assets/images/cancel.svg'

function MatchFound() {
  const userData=JSON.parse(sessionStorage.getItem('user_info'))
  const {firstName,location,level,availability_day,availability_time,seeking_type}=userData
  
  return (
    <>
    <h3>Find Match</h3>
    <div className='profile-content-container height'>
    <ProfileTopSection name={firstName} location={location} icon1={mail} icon2={cancel} toIcon1="/match/inviteMatch"/>
    <div className='profile-bottom-section profile-details'>
    <ProfileBottomSection level={level} availability={[...availability_day]} time={`${availability_time.start + '-'+availability_time.end}`} seekingType={[...seeking_type]}/>
    </div>
    </div>
    </>
  )
}

export default MatchFound
