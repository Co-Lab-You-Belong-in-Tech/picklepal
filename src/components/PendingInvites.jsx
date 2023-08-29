import React, { useEffect, useState } from "react";
import "../styles/invites.css";
import accept from "../assets/images/check.svg";
import reject from "../assets/images/cancel.svg";
import { displayAcceptedModal } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function PendingInvites() {
  const dispatch = useDispatch();
  const [pendingLists, setPendingLists] = useState([]);
  const [loading, setLoading] = useState(true);

  function showModal() {
    dispatch(displayAcceptedModal(true));
  }

  useEffect(() => {
    async function getinvites() {
      try {
        const auth_token = sessionStorage.getItem("auth_token");
        const headers = {
          Authorization: `Bearer ${auth_token}`,
        };
        const response = await axios.get(
          "https://pickleball-o3oe.onrender.com/api/getinvites",
          { headers }
        );
        const data = response.data.data;
        // console.log(data)
        setPendingLists(data);
        setLoading(false);
      } catch (err) {
        console.warn(err);
      }
    }

    getinvites();
  }, []);
  if (loading) {
    return (
      <div className="center">
        <div className="spinner"></div>
      </div>
    );
  }
  return pendingLists.length === 0 ? (
    <div className="center">🙁 no pending invites</div>
  ) : (
    <table className="custom-table">
      <tbody>
        {pendingLists.map((list) => {
    
          const dateString = list.match_dt;
          const date = new Date(dateString);
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const matchDate = `${list.match_day} ${month}/${day}`;
          return (
            <tr key={list._id}>
              <td className="invite-name">{list.inviter_id.firstName}</td>
              <td className="seeking-td">{list.seeking_type}</td>
              <td className="match-date">
                {matchDate}, {list.match_st}
              </td>
              <td className="acceptReject">
                <img src={accept} alt="accept invite" onClick={showModal} />
                <img src={reject} alt="reject invite" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PendingInvites;
