import React from "react";
import Heading from "../Heading";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CheckMark, Admin } from "../../constants/icons";
export default function Success() {
  <Heading title="Submission success" />;
  return (
    <Container className="success">
      <Row>
        <Col>
          <div>
            <CheckMark />
            <h2 className="title__grey">Success!</h2>
            <p>Your changes have been added.</p>
            <p> They can be viewed now.</p>{" "}
            <NavLink to="/admin" className="success__link">
              <Admin /> Admin
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
