import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import GetStarted from "./pages/GetStarted";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import LoginContext from "./context/LoginContext";

function App() {
  //First Step
  const [firstStep, setFirstStep] = useState(false);
  const handleFirstStepChange = () => {
    setFirstStep(true);
  };

  // LOGIN
  const [isLoggedIn, setIsLoggedIn] = useState({
    login: false,
    username: "",
    avatar: null,
  });

  useLayoutEffect(() => {
    const storedUserInfo = localStorage.getItem("isLoggedIn");
    if (storedUserInfo === "1") {
      const refreshState = { ...localStorage };
      /// Avatar problem Fix avter refsher (because storage null === string)
      if (refreshState.avatar === "null") {
        refreshState.avatar = null;
      }
      //////
      setIsLoggedIn((prev) => {
        return {
          ...refreshState,
          login: true,
        };
      });
      setFirstStep(true);
    }
  }, []);

  const logInHandler = (props) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("username", props.username);
    localStorage.setItem("avatar", props.avatar);
    setIsLoggedIn({
      login: true,
      username: props.username,
      avatar: props.avatar,
    });
  };
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn({ login: false, username: "", avatar: null });
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn.login,
        username: isLoggedIn.username,
        avatar: isLoggedIn.avatar,
        onLogout: logoutHandler,
      }}
    >
      {!firstStep && <GetStarted onClick={handleFirstStepChange} />}
      {firstStep && !isLoggedIn.login && <Login onLogin={logInHandler} />}
      {isLoggedIn.login && <Home onLogout={logoutHandler} />}
    </LoginContext.Provider>
  );
}

export default App;
