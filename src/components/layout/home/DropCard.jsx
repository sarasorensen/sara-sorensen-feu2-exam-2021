import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function HomeItem({ id, name, image, email }) {
  return (
    <CardDeck>
      <Link className="link link__dropdown" to={"hotelSpecific/" + id}>
        <Card className="drop__card">
          <Card.Body className="drop__body">
            <div className="drop__box">
              <Card.Img
                variant="top"
                className="drop__img"
                src={image}
                alt={name}
              />
            </div>
            <ul>
              <li>
                <Card.Title className="drop__title">{name}</Card.Title>{" "}
              </li>
              <li>
                <p>{email}</p>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Link>
    </CardDeck>
  );
}

HomeItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HomeItem;
