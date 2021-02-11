import React from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Contacts from "../contact/FetchContact";
import Enquiries from "../enquiry/FetchEnquiries";
import { Container, Row, Col } from "react-bootstrap";
import LoginData from "../auth/LoginData";
import SideNav from "./adminNav";
import { Access } from "../../constants/icons";

function Admin() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username === null && password === null) {
    return (
      <Container className="admin">
        <Row>
          <Col className="admin__error">
            <div>
              <Access />
              <h2 className="title__grey">No Access</h2>
              <p>You have to be logged in to view this page.</p>
              <Link to="/login" className="success__link">
                Log in Here
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container id="admin" className="admin">
      <Row>
        <div className="admin__col">
          <Heading title="Admin" />
          <SideNav />
        </div>

        <div id="user" className="admin__col">
          <LoginData />
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
