import { useEffect, useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState({ login: false, username: "" });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("isLoggedIn");
    console.log(storedUserInfo);
    if (storedUserInfo === "1") {
      setIsLoggedIn((prev) => {
        return { ...prev, login: true };
      });
      setFirstStep(true);
    }
  }, []);

  const logInHandler = (props) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn({ login: true, username: props.username });
  };
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn({ login: false, username: "" });
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn.login,
        username: isLoggedIn.username,
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
