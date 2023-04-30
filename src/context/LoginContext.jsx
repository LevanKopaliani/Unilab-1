import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  username: "",
  avatar: null,
});

export default LoginContext;
