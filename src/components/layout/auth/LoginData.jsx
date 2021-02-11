import { LogedIn, Lock } from "../../constants/icons";

function LogIn() {
  const loginInfo = localStorage.getItem("loginInfo");

  function clear(e) {
    e.preventDefault();
    localStorage.removeItem("loginInfo");
    window.location.href = "login";
  }

  return (
    <div className="admin__login">
      <div>
        <LogedIn />
        <p>You are logged in as:</p>
        <p>{loginInfo}</p>
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
