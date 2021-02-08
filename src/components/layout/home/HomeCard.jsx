import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function HomeItem({ id, name, image, price, email }) {
  return (
    <CardDeck>
      <Link className="link link__dropdown" to={"hotelSpecific/" + id}>
        <Card className="home__card">
          <Card.Body>
            <Card.Img
              variant="top"
              className="home__img"
              width="298px"
              height="45px"
              src={image}
              alt={name}
            />

            <ul>
              <li>
                <Card.Title className="home__title">{name}</Card.Title>{" "}
              </li>
              <li>
                <p className="home__price">Price: {price}$</p>
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
  price: PropTypes.number.isRequired,
};

export default HomeItem;
