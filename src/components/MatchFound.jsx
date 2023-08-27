function MatchFound() {
  const matchFound = useLoaderData();
  const dispatch = useDispatch();
  const showInvitationComp = useSelector((state) => state.user.showInvitationComp);
  const [matchFoundList, setMatchFoundList] = useState([]);
  const [count, setCount] = useState(0);
  const [currentMatch, setCurrentMatch] = useState({});
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [seeking, setSeeking] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [time, setTime] = useState({});

  useEffect(() => {
    if (matchFound.data) {
      const updatedMatchList = Object.entries(matchFound.data.data);
      setMatchFoundList(updatedMatchList);
      const match = updatedMatchList[count][1];
      setCurrentMatch(match);
      setLevel(match.player_pickleball.level);
      setName(match.firstName);
      setSeeking(match.player_pickleball.seeking_type);
      setAvailability(match.availability.day);
      setTime(match.availability.time);
      sessionStorage.setItem('dates', JSON.stringify(match.available_dates));
      sessionStorage.setItem('invitee_id', match._id);
    }
  }, [matchFound, count]);

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
  );
}
