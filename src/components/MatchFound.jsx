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
  const matchFound = useLoaderData();
  const dispatch = useDispatch();
  const showInvitationComp = useSelector((state) => state.user.showInvitationComp);
  const [matchFoundList, setMatchFoundList] = useState([]);
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [seeking, setSeeking] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [time, setTime] = useState({});
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = sessionStorage.getItem('auth_token');
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        };
  
        const response = await axios.get('https:pickleball-o3oe.onrender.com/api/getplayers', config);
        // Process the response or set state here if needed
        // console.log(response.data.data);
        const matchData=response.data.data
        const matchList=Object.entries(matchData)
        const currentMatch=matchList[count][1]
        setLevel(currentMatch.player_pickleball.level);
        setName(currentMatch.firstName);
        setSeeking(currentMatch.player_pickleball.seeking_type);
        setAvailability(currentMatch.availability.day);
        setTime(currentMatch.availability.time);
        sessionStorage.setItem('dates', JSON.stringify(currentMatch.available_dates));
        sessionStorage.setItem('invitee_id',(currentMatch._id));
    
        console.log(currentMatch)
  
      } catch (err) {
        console.warn(err);
      }
    };
  
    fetchData(); // Call the async function
  }, [count]);
  



    
     


  function getNextMatch() {
    if (count < matchFoundList.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  function MatchInvite() {
    dispatch(inviteMatch(true));
    console.log('invite');
  }
 
      
  
  return (
  
    <>
      {showInvitationComp ? (
        <InviteMatch availability_dates={dates} invitee_id={currentMatch._id} />
      ) : (
        <>
          <h3>Find Match</h3>
          <div className='profile-content-container height'>
            <ProfileTopSection
              name={name}
              location='Toronto'
              icon1={mail}
              icon2={cancel}
              onclickIcon1={MatchInvite}
              onclickIcon2={getNextMatch}
              toIcon1='/match/inviteMatch'
            />
            <div className='profile-bottom-section profile-details'>
              <ProfileBottomSection
                level={level}
                seekingType={seeking.join('0')}
                availability={availability.join(', ')}
                time={`${time.start} - ${time.end}`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );}
      


export default MatchFound
