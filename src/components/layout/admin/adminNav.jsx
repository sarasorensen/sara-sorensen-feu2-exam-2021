import React from "react";
import { Link } from "react-router-dom";
import { PencilFill, HouseFill, ChatDotsFill } from "react-bootstrap-icons";

function adminNav() {
  return (
    <div className="adminNav">
      <Link to="/adminHotel">
        <HouseFill className="icon" />
        Edit Hotels
      </Link>
      <a href="#Contacts">
        <ChatDotsFill className="icon" />
        Messages
      </a>
      <a href="#enquiries">
        {" "}
        <PencilFill className="icon" />
        Enquiries
      </a>
    </div>
  );
}

export default adminNav;
