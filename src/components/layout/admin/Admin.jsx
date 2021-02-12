import React from "react";
import Heading from "../Heading";
import Contacts from "../contact/FetchContact";
import Enquiries from "../enquiry/FetchEnquiries";
import { Container, Row } from "react-bootstrap";
import LogOut from "../auth/Logout";
import SideNav from "./adminNav";
import AccessMsg from "./AccessMsg";
import { LogedIn, Lock } from "../../constants/icons";

function Admin() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username === null && password === null) {
    return <AccessMsg />;
  }

  return (
    <Container id="admin" className="admin">
      <Row>
        <div className="admin__col">
          <Heading title="Admin" />
          <SideNav />
        </div>

        <div id="user" className="admin__col">
          <div className="admin__login">
            <div>
              <LogedIn />
              <p>You are logged in as:</p>
              <p>{username}</p>
            </div>
            <LogOut>
              {" "}
              <Lock />
            </LogOut>
          </div>
        </div>

        <div className="admin__col">
          <div className="admin__box text-center">
            <p className="admin__text">
              <span className="form__error"> NB!</span> All deletions are final.
              To ensure a good user experience, do not delete anything that have
              not been authorized.{" "}
            </p>
          </div>
        </div>

        <div id="Contacts" className="admin__col">
          <Contacts />
        </div>

        <div id="enquiries" className="admin__col">
          <Enquiries />
        </div>
      </Row>
    </Container>
  );
}

export default Admin;
