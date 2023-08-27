import React, { useEffect, useState } from 'react'
import ProfileTopSection from '../components/ProfileTopSection'
import ProfileBottomSection from '../components/ProfileBottomSection'
import mail from "../assets/images/mail.svg"
import cancel from '../assets/images/cancel.svg'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { inviteMatch, matchDetails } from '../redux/slices/userSlice'
import InviteMatch from './InviteMatch'


function MatchFound() {
  const dispatch=useDispatch()
  const matchFound=useLoaderData() || {a:'wahala',b:'SECOND WAHALA'}
  const matchFoundList=Object.entries(matchFound.data.data)
  let [count,setCount]=useState(0)
  let [currentMatch,setCurrentMatch]=useState(matchFoundList[count][1])
  const{firstName,location,player_pickleball,availability}=currentMatch
  let dates=JSON.stringify(currentMatch.available_dates)
  sessionStorage.setItem('dates',dates)
  let invitee_id=currentMatch._id
  JSON.stringify(sessionStorage.setItem('invitee_id',invitee_id))
  console.log(matchFoundList)
  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const data = await useLoaderData();
        console.log(data)
      } catch (error) {
        console.warn(error);
      }
    };

    fetchMatchData();
  }, []);
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
    {showInvitationComp?<InviteMatch availability_dates={dates} invitee_id={currentMatch._id}/>:<>
    <h3>Find Match</h3>
    <div className='profile-content-container height'>
    <ProfileTopSection name={firstName} location={location} icon1={mail} icon2={cancel}onclickIcon1={MatchInvite} onclickIcon2={getNextMatch} toIcon1="/match/inviteMatch"/>
    <div className='profile-bottom-section profile-details'>
    <ProfileBottomSection level={player_pickleball.level} seekingType={player_pickleball.seeking_type.join("0")} availability={availability.day.join(", ")} time={`${availability.time.start} - ${availability.time.end}`}/>
    </div>
    </div>
    </>}
    
    </>
  )
}

export async function Loader(){
  const authToken=sessionStorage.getItem('auth_token')
  const config={
    headers:{
      Authorization:`Bearer ${authToken}`
    }
   
  }
 
    const response=await axios.get('https:pickleball-o3oe.onrender.com/api/getplayers',config)
    return response

  

}
export default MatchFound
