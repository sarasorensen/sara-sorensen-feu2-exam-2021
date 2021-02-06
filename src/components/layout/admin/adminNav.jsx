import React from "react";
import { Link } from "react-router-dom";
import { Message, Pencil, Lock, House } from "../../constants/icons";

export default function adminNav() {
  return (
    <div className="adminNav">
      <Link to="/editHotels">
        <House />
        Edit Hotels
      </Link>
      <a href="#messages">
        <Message />
        Messages
      </a>
      <a href="#enquiries">
        {" "}
        <Pencil />
        Enquiries
      </a>
      <a href="/login">
        {" "}
        <Lock />
        Log Out
      </a>
    </div>
  );
}
