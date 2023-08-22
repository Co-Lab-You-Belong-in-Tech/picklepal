import React from 'react'
import '../styles/inviteMatch.css'

import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { displayModal } from '../redux/slices/userSlice'

function InviteMatch() {
  const dispatch=useDispatch()
  
  function openModal(e){
    e.preventDefault()
    dispatch(displayModal(true))
    console.log('jjj')
  }
  const isModalOpen=useSelector((state)=>(state.user.isModalOpen))
  console.log('openModal'+ isModalOpen)
  return (
    <div className='invite-match-container'>
      <h3>Invite</h3>
      <form className='invitation-form' onSubmit={openModal}>
        <div>
        INVITATION FORM CONTENT
        </div>
      <Button  text='Send' type='submit' classname='invite_btn'/>
      </form>
      
    </div>
  )
}

export default InviteMatch
