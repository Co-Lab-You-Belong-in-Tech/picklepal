import React from 'react'

import AuthenticatedPage from '../components/AuthenticatedPage'
import ProfileTopSection from '../components/ProfileTopSection'
import ProfileBottomSection from '../components/ProfileBottomSection'
import mail from "../assets/images/mail.svg"
import cancel from '../assets/images/cancel.svg'
import "../styles/profile.css"
function Match() {
  return (
    <AuthenticatedPage>
    <section className='profile-section width'>
      <h3>Find Match</h3>

    <div className='profile-content-container height'>
    <ProfileTopSection name="Quan" location="West End, Toronto, CA" icon1={mail} icon2={cancel}/>
    <div className='profile-bottom-section profile-details'>
    <ProfileBottomSection level='Intermediate' availability='Saturday, Sunday' time='10:00 - 12:00' seekingType='Partner, Opponent'/>
    </div>
    </div>


     
    </section>
    </AuthenticatedPage> 
  )
}

export default Match
