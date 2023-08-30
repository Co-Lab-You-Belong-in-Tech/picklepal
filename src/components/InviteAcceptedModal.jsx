import React from "react";
import ReactModal from "react-modal";
import "../styles/modal.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { displayAcceptedModal } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { useState } from "react";

function InviteAcceptedModal() {
  const dispatch = useDispatch();
  const [email,setEmail]=useState('')
  const isInviteAccepted = useSelector((state) => state.user.isInviteAccepted);

  
  function messageInvite() {
    // const emailInvite = useSelector((state) => state.user.emailInvite);
    // setEmail(emailInvite)
    dispatch(displayAcceptedModal(false));
  }
 
  return (
    <ReactModal
      isOpen={isInviteAccepted}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h3>Hooray!</h3>
      <p>
        You have accepted the invite. Send an email to introduce yourself and
        coordinate a meeting spot.
      </p>

      <a
        href={`mailto:${email}?subject=Discussing%20Meeting%20Details%20for%20Pickleball%20Match`}
      >
        <Button text="Email" onclick={messageInvite} />
      </a>
    </ReactModal>
  );
}

export default InviteAcceptedModal;
