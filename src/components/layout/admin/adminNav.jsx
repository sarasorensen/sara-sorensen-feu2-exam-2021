import React from "react";
import { Link } from "react-router-dom";
import { Message, Pencil, Lock, House } from "../../constants/icons";

function adminNav() {
  function clear(e) {
    e.preventDefault();
    localStorage.removeItem("loginInfo");
    window.location.href = "/login";
  }

  return (
    <div className="adminNav">
      <Link to="/editHotels">
        <House />
        Edit Hotels
      </Link>
      <a href="#Contacts">
        <Message />
        Messages
      </a>
      <a href="#enquiries">
        {" "}
        <Pencil />
        Enquiries
      </a>
      <a href="/login" onClick={clear}>
        {" "}
        <Lock />
        Log Out
      </a>
    </div>
  );
}

export default adminNav;
