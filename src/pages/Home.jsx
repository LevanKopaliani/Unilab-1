import React, { useContext, useState } from "react";
import "./Home.scss";
import LoginContext from "../context/LoginContext";
import SideNav from "../components/SideNav";

const Home = (props) => {
  const [navVisible, setNavVisible] = useState(false);
  const handleToogleNavVisible = () => {
    setNavVisible(!navVisible);
  };

  const ctx = useContext(LoginContext);
  console.log(ctx.avatar);

  return (
    <main>
      <header>
        <div className="logo-container">
          <p className="logo-text">TO DO</p>
        </div>
        <nav className="nav">
          <p className="username">{ctx.username}</p>
          <div className="avatar-container" onClick={handleToogleNavVisible}>
            {ctx.avatar && <img src={ctx.avatar} alt="avatar" />}
          </div>
          <SideNav
            onCloseNav={handleToogleNavVisible}
            visible={navVisible}
            username={ctx.username}
            onLogout={props.onLogout}
            avatarImg={ctx.avatar}
          />
        </nav>
      </header>
      <p>test</p>
    </main>
  );
};

export default Home;
