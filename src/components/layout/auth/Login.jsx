import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import LoginForm from "./LoginForm";

function Login() {
  if (localStorage.getItem("username") !== null) {
    return (
      <Container className="admin">
        <Row>
          <Col className="admin__error">
            <div>
              <CheckCircleFill size={70} className="icon__access" />
              <h2 className="title__grey">Success</h2>
              <p>You are logged in.</p>
              <Link to="/admin" className="success__link">
                Go to Admin
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="login">
        <LoginForm />
      </div>
    );
  }
}
export default Login;
