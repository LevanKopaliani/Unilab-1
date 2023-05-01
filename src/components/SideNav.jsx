import React from "react";
import "./SideNav.scss";
import CloseButton from "../assets/img/cancel.png";

const SideNav = (props) => {
  return (
    <>
      <div
        className={props.visible ? "backdrop visible" : "backdrop"}
        onClick={props.onCloseNav}
      ></div>
      <nav className={props.visible ? "sidenav visible" : "sidenav"}>
        <div className="closebutton">
          <img src={CloseButton} alt="close" onClick={props.onCloseNav} />
        </div>
        <div className="user-info">
          <div className="avatar-container">
            {props.avatarImg && <img src={props.avatarImg} alt="avatar" />}
          </div>
          <p className="sidenav-username">{props.username}</p>
          <button type="button" onClick={props.onLogout}>
            logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
