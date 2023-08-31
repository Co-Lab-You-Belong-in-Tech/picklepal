import React, { useEffect, useState } from "react";
import axios from "axios";

function Invitations() {
  const [loading, setLoading] = useState(true);
  const [invitationsLists, setInvitationsLists] = useState([]);
  useEffect(() => {
    async function getinvitations() {
      try {
        const user_info = JSON.parse(sessionStorage.getItem("user_info"));
        const auth_token = user_info.auth_token;
        const headers = {
          Authorization: `Bearer ${auth_token}`,
        };
        const response = await axios.get(
          "https://pickleball-o3oe.onrender.com/api/getinvitations",
          { headers }
        );

        setInvitationsLists(response.data.data);
        setLoading(false);
      } catch (err) {
        console.warn(err);
      }
    }

    getinvitations();
  }, []);
  if (loading) {
    return (
      <div className="center">
        <div className="spinner"></div>
      </div>
    );
  }
  return invitationsLists.length === 0 ? (
    <div className="center">🙁Ooops, you have not invited anyone</div>
  ) : (
    <table className="custom-table">
      <tbody>
        {invitationsLists.map((list) => {
          const dateString = list.match_dt;
          const date = new Date(dateString);
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const matchDate = `${list.match_day} ${month}/${day}`;
          return (
            <tr key={list._id}>
              <td className="invite-name">{list.invitee_id.firstName}</td>
              <td className="seeking-td">{list.seeking_type}</td>
              <td className="match-date">
                {matchDate}, {list.match_st}
              </td>
              <td className="status" style={{ color: list.invitation_status==='accepted'?'#006400':'red'}}>
                {list.invitation_status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Invitations;
