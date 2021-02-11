import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./LoginForm";
import { CheckMark } from "../../constants/icons";

function Login() {
  if (localStorage.getItem("loginInfo")) {
    const loginInfo = localStorage.getItem("loginInfo");
    return (
      <Container className="login">
        <Row>
          <Col>
            <div>
              <CheckMark />
              <h2 className="title__grey">Logged in</h2>
              <p>You are logged in as {loginInfo}.</p>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return <LoginForm />;
}

export default Login;
