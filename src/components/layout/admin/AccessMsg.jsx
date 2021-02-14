import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";

function AccessMsg() {
  return (
    <Container className="admin">
      <Row>
        <Col className="admin__error">
          <div>
            <EyeFill size={70} className="icon__access" />
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

export default AccessMsg;
