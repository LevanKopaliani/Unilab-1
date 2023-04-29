import React, { useState } from "react";
import "./Login.scss";

import { AvatarInput } from "../AvatarInput";

const Login = (props) => {
  const [username, setUsername] = useState("");

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    console.log("prevent");
    props.onLogin({
      username: username,
    });
  };

  return (
    <div className="login_page">
      <div className="login_form-container">
        <form className="login-form" onSubmit={onsubmitHandler}>
          <h1 className="title">Get Started</h1>
          <AvatarInput />
          <div className="user-input">
            <label htmlFor="name">fill in you name</label>
            <input
              value={username}
              onChange={handleUserChange}
              type="text"
              id="name"
              placeholder="your name"
              min="2"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
