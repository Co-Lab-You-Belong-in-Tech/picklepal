import star from "../assets/images/star.svg"
import calender from "../assets/images/calender.svg"
import clock from "../assets/images/time.svg"
import search from "../assets/images/search.svg"

function ProfileBottomSection({ level, availability, time, seekingType }) {

  return (
    <>
    <p className='' style={{textTransform:"capitalize"}}><img src={star} alt='profile icon'/>{level}</p>
    <p className='' style={{textTransform:"capitalize"}}><img src={calender} alt='profile icon'/>{availability}</p>
    <p className='' style={{textTransform:"capitalize"}}><img src={clock} alt='profile icon'/>{time}</p>
    <p className='' style={{textTransform:"capitalize"}}><img src={search} alt='profile icon'/>{seekingType}</p>
  </>
  )
}

export default ProfileBottomSection
