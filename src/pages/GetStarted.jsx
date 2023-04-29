import React from "react";

import Logo from "../assets/img/logo.svg";
import "./GetStarted.scss";

const GetStarted = (props) => {
  return (
    <div className="getstarted_page">
      <div className="getstarted_page-content">
        <img src={Logo} alt="logo" />
        <p className="title">Keep Track Of Daily Tasks In Life</p>
        <button type="button" onClick={props.onClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
