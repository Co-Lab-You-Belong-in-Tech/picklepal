import React from "react";
import "../styles/inviteMatch.css";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { displayModal } from "../redux/slices/userSlice";
import axios from "axios";

function InviteMatch() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const availability_dates = JSON.parse(sessionStorage.getItem("dates"));
  const invitee_id = sessionStorage.getItem("invitee_id");
  const user_info = JSON.parse(sessionStorage.getItem("user_info"));

  const seeking_type = user_info.seeking_type;
  console.log(seeking_type);

  //https://pickleball-o3oe.onrender.com/api/sendinvitation

  async function invitePlayer(data) {
    const auth_token = sessionStorage.getItem("auth_token");

    const allData = { invitee_id, ...data };

    const headers = {
      Authorization: `Bearer ${auth_token}`,
    };

    try {
      const response = await axios.post(
        "https://pickleball-o3oe.onrender.com/api/sendinvitation",
        allData,
        { headers }
      );
      console.log(response);
      dispatch(displayModal(true));
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <div className="invite-match-container">
      <h3>Invite</h3>
      <form className="invitation-form" onSubmit={handleSubmit(invitePlayer)}>
        <p>Please choose a scheduled date within the next two weeks </p>
        <select
          {...register("match_d", { required: "choose a date" })}
          className="time-dropdown"
        >
          <option value="">Select date</option>
          {availability_dates.map((dates) => {
            const date = Object.keys(dates)[0];
            return (
              <option value={date} key={date}>
                {date}
              </option>
            );
          })}
        </select>
        <p className="error-message">{errors.match_d?.message}</p>

        <p>Starting at ....</p>
        <select
          {...register("match_st", { required: "choose a starting time" })}
          className="time-dropdown"
        >
          <option value="">Select time</option>
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
        <p className="error-message">{errors.match_st?.message}</p>
        <p>as my ...</p>
        <div className="step-2_options seeking-type">
          {seeking_type.includes("partner") ? (
            <>
              <input
                {...register("seeking_type", {
                  required: "choose a player type",
                })}
                type="radio"
                id="partner"
                name="seeking_type"
                value="partner"
              />
              <label htmlFor="partner">
                <p>Partner</p>
              </label>
            </>
          ) : (
            ""
          )}
          {seeking_type.includes("opponent") ? (
            <>
              <input
                {...register("seeking_type", {
                  required: "choose a player type",
                })}
                type="radio"
                id="opponent"
                name="seeking_type"
                value="opponent"
              />
              <label htmlFor="opponent">
                <p>Opponent</p>
              </label>
            </>
          ) : (
            ""
          )}
          <p className="error-message">{errors.seeking_type?.message}</p>
        </div>
        <Button
          text="Send"
          type="submit"
          classname="invite_btn"
          issubmitting={isSubmitting}
        />
      </form>
    </div>
  );
}

export default React.memo(InviteMatch);
