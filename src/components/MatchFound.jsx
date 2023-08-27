/* eslint-disable react-hooks/exhaustive-deps */
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
import Loading from './Loading'

function MatchFound() {
  // const matchFound = useLoaderData();
  const dispatch = useDispatch();
  const showInvitationComp = useSelector((state) => state.user.showInvitationComp);
  const [matchFoundList, setMatchFoundList] = useState([]);
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [seeking, setSeeking] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [time, setTime] = useState({});
  const [loading, setLoading] = useState(true)
  const [playerData, setPlayerData] = useState({})



  const fetchData = async () => {
    try {
      setLoading(true)
      const authToken = sessionStorage.getItem('auth_token');
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const response = await axios.get('https:pickleball-o3oe.onrender.com/api/getplayers', config);
      console.log('response', response)
      const matchList = Object.entries(response.data.data)
      console.log('matchList', matchList)
      setMatchFoundList(matchList);
      console.log('matchList[count][1]', matchList[count][1])
      setPlayerData(matchList[count][1])
      setLoading(false)
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    fetchData(); // Call the async function
  }, [showInvitationComp]);

  function getNextMatch() {
    if (count < matchFoundList.length - 1) {
      setPlayerData(matchFoundList[count + 1][1])
      setCount(count + 1);
    } 
    if(count==matchFoundList.length-1){
      setCount(0)
    }
    
  }

  function MatchInvite(){
    dispatch(inviteMatch(true))
  }
  

  if (loading)
    return <Loading />;

  return (
    <>
      {showInvitationComp ? (
        <InviteMatch availability_dates={playerData.available_dates} invitee_id={playerData._id} />
      ) : (
        <>
          <h3>Find Match</h3>
          <div className='profile-content-container height'>
            <ProfileTopSection
              name={playerData.firstName}
              location='Toronto'
              icon1={mail}
              icon2={cancel}
              onclickIcon1={MatchInvite}
              onclickIcon2={getNextMatch}
              // toIcon1='/match/inviteMatch'
            />
            <div className='profile-bottom-section profile-details'>
              <ProfileBottomSection
                level={playerData.player_pickleball.level}
                seekingType={playerData.player_pickleball.seeking_type.join(', ')}
                availability={playerData.availability.day.join(', ')}
                time={`${playerData.availability.time.start} - ${playerData.availability.time.end}`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}



export default MatchFound;
