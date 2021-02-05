import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import { CheckMark } from "../../constants/icons";

function Login() {
  if (localStorage.getItem("loginInfo")) {
    const loginInfo = localStorage.getItem("loginInfo");
    return (
      <Container className="login">
        <Row>
          <Col>
            <CheckMark />
            <h1 className="main__title">Log in</h1>
            <p>You are logged in as {loginInfo}.</p>
            <NavLink to="/" className="success__link">
              Back to Homepage
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }

  return <LoginForm />;
}

export default Login;
