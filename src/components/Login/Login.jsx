import React, { useState } from "react";
import "./Login.scss";
import { AvatarInput } from "../AvatarInput";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [loginValidated, setLoginValidated] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handleGetAvatar = (propimg) => {
    if (propimg.avatar === null) {
      setAvatar(null);
    } else {
      setAvatar(propimg.avatar);
    }
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();

    props.onLogin({
      username: username,
      avatar: avatar,
    });
  };

  const handleValidateLogin = (e) => {
    if (e.target.value.length < 2) {
      setLoginValidated(false);
    } else {
      setLoginValidated(true);
    }
  };

  return (
    <div className="login_page">
      <div className="login_form-container">
        <form className="login-form" onSubmit={onsubmitHandler}>
          <h1 className="title">Get Started</h1>
          <AvatarInput onGetAvatar={handleGetAvatar} />
          <div className="user-input">
            <label htmlFor="name">fill in you name</label>
            <input
              value={username}
              onChange={handleUserChange}
              type="text"
              placeholder="your name"
              min="2"
              onBlur={handleValidateLogin}
              className={!loginValidated ? "username notvalid" : "username"}
            />
            {!loginValidated && <p>* enter username please (min two letter)</p>}
          </div>
          <button type="submit" disabled={username.length < 2}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
