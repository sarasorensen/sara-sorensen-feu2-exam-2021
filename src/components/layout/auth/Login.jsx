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
            <div>
              <CheckMark />
              <h2 className="main__title">Logged in</h2>
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
