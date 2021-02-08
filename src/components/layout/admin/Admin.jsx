import React from "react";
//import { Access } from "../../constants/icons";
//import { Link } from "react-router-dom";
import Heading from "../Heading";
import Messages from "../contact/FetchContact";
import AllEnquiries from "../enquiry/FetchEnquiries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import LoginData from "../auth/LoginData";
import SideNav from "./adminNav";

export default function Admin() {
  <Heading title="Administrator dashboard" />;

  // const loginInfo = localStorage.getItem("email");
  //This will be active, when development is finished.
  // if (loginInfo === null) {
  // return (
  //  <Container className="admin">
  //    <Row>
  //     <Col className="admin__error">
  //      <div>
  //        <Access />
  //     <h2 className="main__title">You don't have access!</h2>
  //     <p>Sorry, you have to be logged in to view this page.</p>
  //  <Link to="/login" className="success__link">
  //     Log in Here
  //    </Link>
  //  </div>
  // </Col>
  //  </Row>
  //  </Container>
  //  );
  // }

  return (
    <Container id="admin" className="admin">
      <h2 className="main__title">Admin</h2>
      <Row>
        <div className="admin__col">
          <SideNav />
        </div>

        <div id="user" className="admin__col">
          <LoginData />
        </div>

        <div className="admin__col">
          <div className="admin__box text-center">
            <p>
              <span className="form__error"> NB!</span> All deletions are final.
              To ensure a good user experience, do not delete anything that have
              not been authorized.{" "}
            </p>
          </div>
        </div>

        <div id="messages" className="admin__col">
          <Messages />
        </div>

        <div id="enquiries" className="admin__col">
          <AllEnquiries />
        </div>
      </Row>
    </Container>
  );
}
