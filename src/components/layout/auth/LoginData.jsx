import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { LogedIn, Lock } from "../../constants/icons";

function LogIn() {
  const username = localStorage.getItem("username");

  const { logout } = useContext(AuthContext);
  const history = useHistory();

  function clear(e) {
    e.preventDefault();
    logout();
    history.push("/");
  }

  return (
    <div className="admin__login">
      <div>
        <LogedIn />
        <p>You are logged in as:</p>
        <p>{username}</p>
      </div>
      <button className="btn" onClick={clear}>
        {" "}
        <Lock />
        Log Out
      </button>
    </div>
  );
}

export default LogIn;
