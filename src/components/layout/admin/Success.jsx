import React from "react";
import Heading from "../Heading";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CheckMark } from "../../constants/icons";
export default function Success() {
  <Heading title="Submission success" />;
  return (
    <Container className="success">
      <Row>
        <Col>
          <div>
            <CheckMark />
            <h1 className="main__title">Success!</h1>
            <p>
              Your changes have been added to the main page. They can be viewed
              now.
            </p>
            <ul>
              <li>
                {" "}
                <NavLink to="/hotels" className="success__link">
                  See changes
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="success__link">
                  Back to Homepage
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
