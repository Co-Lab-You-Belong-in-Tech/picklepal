import React, { useState } from "react";
import "../styles/invites.css";
import PendingInvites from "./PendingInvites";
import Invitations from "./Invitations";

function Invites() {
  const [invite, setInvite] = useState("pending");

  return (
    <div className="invites">
      <div className="invitations-tab">
        <p
          className={`${invite === "pending" ? "active-tab" : ""} pending`}
          onClick={() => setInvite("pending")}
        >
          Pending Invites
        </p>
        <p
          className={`${
            invite === "invitations" ? "active-tab" : ""
          } invitations`}
          onClick={() => setInvite("invitations")}
        >
          Your Invitations
        </p>
      </div>

      {invite == "pending" ? <PendingInvites /> : <Invitations/>}
    </div>
  );
}

export default Invites;
