import React, { useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import "../styles/layout.css";

import { BsList } from "react-icons/bs";
import pickleleft from "../assets/images/pickballeft.svg";
import pickleright from "../assets/images/pickbalright.svg";
import ProtectedRoute from "../components/ProtectedRoute";
import InviteSentModal from "../components/InviteSentModal";
import InviteAcceptedModal from "../components/InviteAcceptedModal";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, inviteMatch } from "../redux/slices/userSlice";
import Loading from "../components/Loading";

function AppLayout() {
  const [menu, setMenu] = useState(false);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const navigationState = navigation.state;
  const dispatch = useDispatch();
  function toggleMenu() {
    setMenu(!menu);
  }
  function closeInvite() {
    dispatch(inviteMatch(false));
  }

  const iconStyles = {
    fontSize: "4.5rem",
    fontWeight: "bolder",
    color: "var(--green)",
    borderRadius: "5px",
    boxShadow: "0 1.5px 3px 0 #000000",
  };
  const isAuth = sessionStorage.getItem('isAuth');
  
  function logoutHandler() {
    dispatch(authenticate(false));
    navigate('/');
  }

  return (
    <div className="app-layout">
      {!isAuth && (
        <p className="logo nav-logo" style={{position:'absolute',top:'1rem',left:'2rem'}}>
          <NavLink to="/">Pickle Pals</NavLink>
        </p>
      )}
      {isAuth && (
        <nav className={`${menu ? "" : "bottom-border"}`}>
          {/* Logo */}
          <p className="logo nav-logo">
            <NavLink to="/profile">Pickle Pals</NavLink>
          </p>

          {/* Nav Items */}
          <ul className="desktop-ul">
            {/* <NavLink to="/">Home</NavLink> */}
            <ProtectedRoute to="/profile">Profile</ProtectedRoute>
            <p onClick={closeInvite} style={{margin:"0px"}}>
              <ProtectedRoute to="/match/matchFound">Match</ProtectedRoute>
            </p>
            <ProtectedRoute to="/courts">Courts</ProtectedRoute>
            <a href="#" onClick={logoutHandler}>Logout</a>
          </ul>

          {/* MOBILE HARMUBURGER MENU */}
          <div className="mobile-hamburger-menu">
            <BsList style={iconStyles} onClick={toggleMenu} />
            {menu && (
              <ul className={`mobile-ul ${menu ? "bottom-border" : ""}`}>
                {/* <NavLink to="/">Home</NavLink> */}
                <ProtectedRoute to="/profile">Profile</ProtectedRoute>
                <p onClick={closeInvite}>
                  <ProtectedRoute to="/match/matchFound">Match</ProtectedRoute>
                </p>
                <ProtectedRoute to="/courts">Courts</ProtectedRoute>
              </ul>
            )}
          </div>
        </nav>
      )}

      {navigationState === "loading" && <Loading />}
      <InviteSentModal />
      <InviteAcceptedModal />
      <Outlet />
      <div>
        <img
          src={pickleleft}
          alt="pickleball black illustration"
          className="left-ball ball"
        />
      </div>
      <div>
        <img
          src={pickleright}
          alt="pickleball black illustration"
          className="right-ball ball"
        />
      </div>
    </div>
  );
}

export default AppLayout;
