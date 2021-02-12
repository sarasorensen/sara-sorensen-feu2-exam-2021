import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Access } from "../../constants/icons";

function AccessMsg() {
  return (
    <Container className="admin">
      <Row>
        <Col className="admin__error">
          <div>
            <Access />
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
