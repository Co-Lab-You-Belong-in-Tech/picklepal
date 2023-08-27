import React from 'react'
import '../styles/inviteMatch.css'
import DatePicker from 'react-datepicker';


import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { displayModal } from '../redux/slices/userSlice'

function InviteMatch({availability_dates}) {
  const dispatch=useDispatch()

  console.log(availability_dates)
  
  function openModal(e){
    e.preventDefault()
    dispatch(displayModal(true))

  }
  const isModalOpen=useSelector((state)=>(state.user.isModalOpen))
 const dateObject=availability_dates[0]
  console.log(dateObject)
  
  return (
    <div className='invite-match-container'>
      <h3>Invite</h3>
      <form className='invitation-form' onSubmit={openModal}>
        <p>Please choose a scheduled date within the next two weeks </p>
        <select className="time-dropdown">
        {availability_dates.map((dates)=>{
          const date=Object.keys(dates)[0]
          return <option value={date} key={date}>{date}</option> 
        })}
        </select>
        
        
        <p>Starting at ....</p>
        <select  className="time-dropdown">
      <option value="00:00">00:00</option> 
      <option value="01:00">01:00</option> 
      <option value="02:00">02:00</option> 
      <option value="03:00">03:00</option> 
      <option value="04:00">04:00</option> 
      <option value="05:00">05:00</option> 
      <option value="06:00">06:00</option> 
      <option value="07:00">07:00</option> 
      <option value="08:00">08:00</option> 
      <option value="09:00">09:00</option> 
      <option value="10:00">10:00</option> 
      <option value="11:00">11:00</option> 
      <option value="12:00">12:00</option> 
      <option value="13:00">13:00</option> 
      <option value="14:00">14:00</option>
      <option value="15:00">15:00</option>  
      <option value="16:00">16:00</option> 
      <option value="17:00">17:00</option> 
      <option value="18:00">18:00</option> 
      <option value="19:00">19:00</option> 
      <option value="20:00">20:00</option> 
      <option value="21:00">21:00</option> 
      <option value="22:00">22:00</option> 
      <option value="23:00">23:00</option> 

  </select>  
 
        <p>as my ...</p>
        <div className='step-2_options seeking-type'>   
        <input  type="radio" id="partner" name='seeking_type' value="partner"/>
          <label htmlFor="partner" >
           <p>Partner</p>
         </label>
         <input  type="radio" id="opponent" name='seeking_type' value="opponent"/>
         <label htmlFor="opponent">
           <p>Opponent</p>
         </label>
        </div>
      <Button  text='Send' type='submit' classname='invite_btn'/>
      </form>
      
    </div>
  )
}

export default InviteMatch
