import React from "react";
import Heading from "../Heading";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CheckMark, Admin } from "../../constants/icons";

function Success() {
  return (
    <Container className="success">
      <Row>
        <Col>
          <div>
            <CheckMark />
            <Heading title="Submission success" />
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

export default Success;
