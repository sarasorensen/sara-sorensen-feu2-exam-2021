import React from "react";
import Card from "react-bootstrap/Card";
import Hotel from "../../../images/hotel.jpg";
import Book from "../../../images/book.jpg";
import Contact from "../../../images/contact.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Map, Message, Pencil } from "../../constants/icons";

const InfoBoxes = () => {
  return (
    <Row className="infoBoxes">
      <Col className="col-sm-12 col-md-6 col-lg-4">
        <Card className="infoBoxes__card">
          <Card.Img
            variant="top"
            className="infoBoxes__img"
            src={Hotel}
            alt="Light stone buildings"
            width="238px"
          />
          <Card.Body>
            <Card.Text>
              <Map />
            </Card.Text>
            <Card.Link className="infoBoxes__link" href="hotels">
              Our Hotels
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-sm-12 col-md-6 col-lg-4">
        <Card className="infoBoxes__card">
          <Card.Img
            variant="top"
            className="infoBoxes__img"
            src={Contact}
            alt="Person with hat on in pool"
            width="238px"
          />
          <Card.Body>
            <Card.Text>
              <Message />
            </Card.Text>
            <Card.Link className="infoBoxes__link" href="contact">
              Contact Us
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="infoBoxes__card">
          <Card.Img
            variant="top"
            className="IinfoBoxes__img"
            src={Book}
            alt="Books with beach in background"
            width="238px"
          />
          <Card.Body>
            <Card.Text>
              <Pencil />
            </Card.Text>
            <Card.Link className="infoBoxes__link" href="hotels">
              Book Now
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InfoBoxes;
