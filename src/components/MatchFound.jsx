import React, { useEffect, useState } from 'react'
import ProfileTopSection from '../components/ProfileTopSection'
import ProfileBottomSection from '../components/ProfileBottomSection'
import mail from "../assets/images/mail.svg"
import cancel from '../assets/images/cancel.svg'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { inviteMatch } from '../redux/slices/userSlice'
import InviteMatch from './InviteMatch'


function MatchFound() {
  const dispatch=useDispatch()
  const matchFound=useLoaderData()
  
  const matchFoundList=Object.entries(matchFound.data.data)
  let [count,setCount]=useState(0)
  let [currentMatch,setCurrentMatch]=useState(matchFoundList[count][1])
  let dates=JSON.stringify(currentMatch.available_dates)
  sessionStorage.setItem('dates',dates)
  let invitee_id=currentMatch._id
  JSON.stringify(sessionStorage.setItem('invitee_id',invitee_id))
  const{firstName,location,player_pickleball,availability}=currentMatch
  
  function getNextMatch(){
    if (count < matchFoundList.length - 1) {
      setCount(count + 1);
    } 
    if(count==matchFoundList.length-1){
      setCount(0)
    }
    
  }
 function MatchInvite(){
  dispatch(inviteMatch(true))
 }
  useEffect(()=>{
     setCurrentMatch(matchFoundList[count][1]);
      
  }
  ,[count])
  //https:pickleball-o3oe.onrender.com/api/getplayers
 

  let showInvitationComp=useSelector((state)=>state.user.showInvitationComp)
  

  return (
    <>
    {showInvitationComp?<InviteMatch/>:<>
    <h3>Find Match</h3>
    <div className='profile-content-container height'>
    <ProfileTopSection name={firstName} location={location} icon1={mail} icon2={cancel}onclickIcon1={MatchInvite} onclickIcon2={getNextMatch} toIcon1="/match/inviteMatch"/>
    <div className='profile-bottom-section profile-details'>
    <ProfileBottomSection level={player_pickleball.level} seekingType={player_pickleball.seeking_type.join(", ")} availability={availability.day.join(", ")} time={`${availability.time.start} - ${availability.time.end}`}/>
    </div>
    </div>
    </>}
    
    </>
  )
}

export async function Loader(){
  const user_info=JSON.parse(sessionStorage.getItem('user_info'))
  const auth_token=user_info.auth_token
 
    const headers={
      Authorization:`Bearer ${auth_token}`
    }
   
    const response=await axios.get('https://pickleball-o3oe.onrender.com/api/getplayers',{headers})
    return response

  

}
export default MatchFound
