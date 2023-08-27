import React from 'react'
import ReactModal from 'react-modal'
import "../styles/modal.css"
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { displayAcceptedModal } from '../redux/slices/userSlice'

function InviteAcceptedModal() {
  const dispatch = useDispatch()
  const isInviteAccepted = useSelector((state) => state.user.isInviteAccepted)
  function emailInvite() {
    dispatch(displayAcceptedModal(false))
  }
  return (
    <ReactModal
      isOpen={isInviteAccepted}
      overlayClassName='modal-overlay'
      className='modal-content'>
      <h3>Hooray!</h3>
      <p>You have accepted the invite. Send an email to introduce yourself and coordinate a meeting spot.</p>
      <Button text='Email' onclick={emailInvite} />
    </ReactModal>
  )
}

export default InviteAcceptedModal
