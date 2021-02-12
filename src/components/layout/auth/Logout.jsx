import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function LogOut() {
  function checkLogOut() {
    confirmAlert({
      title: "Confirm Log Out",
      message:
        "If you log out, you will have to register again if you want access to admin.",
      buttons: [
        {
          label: "Confirm",
          onClick: () => doLogout(),
        },
        {
          label: "Cancel",
        },
      ],
    });
  }

  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const doLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <button onClick={checkLogOut} className="btn btn__logout">
      Log out
    </button>
  );
}

export default LogOut;
