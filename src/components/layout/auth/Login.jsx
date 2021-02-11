import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./LoginForm";
import LogOut from "./Logout";
import { CheckMark, Admin } from "../../constants/icons";

function Login() {
  if (localStorage.getItem("username")) {
    const username = localStorage.getItem("username");
    return (
      <Container className="login">
        <Row>
          <Col>
            <div>
              <CheckMark />
              <h2 className="title__grey">Success!</h2>
              <p>You are logged in as {username}.</p>
              <Link to="/admin" className="link login__link">
                <Admin />
                Admin
              </Link>
              <p>Wrong account? </p>
              <LogOut />{" "}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return <LoginForm />;
}

export default Login;
