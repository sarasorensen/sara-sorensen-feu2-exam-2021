import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function LogOut() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const doLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <button onClick={doLogout} className="btn btn__logout">
      Log out
    </button>
  );
}

export default LogOut;
