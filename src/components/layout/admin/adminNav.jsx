import React from "react";
import { Link } from "react-router-dom";
import { Message, Pencil, House } from "../../constants/icons";

function adminNav() {
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
    </div>
  );
}

export default adminNav;
