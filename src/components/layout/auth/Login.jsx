import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  window.localStorage.removeItem("email");

  return <LoginForm />;
}

export default Login;
