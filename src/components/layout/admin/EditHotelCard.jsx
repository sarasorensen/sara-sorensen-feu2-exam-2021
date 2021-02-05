import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import DeleteHotel from "./DeleteHotel";

function HotelDelete({ id, name, image, price, email }) {
  return (
    <CardDeck>
      <Card className="hotel__card">
        <Card.Body>
          <Card.Img
            variant="top"
            className="hotel__img"
            src={image}
            alt={name}
          />
          <ul className="hotel__ul">
            <li>
              <Card.Title className="hotel__title">{name}</Card.Title>{" "}
            </li>
            <li>
              Price: <span className="hotel__price">{price}$</span>
            </li>
            <li>
              <p>{email}</p>
            </li>
          </ul>

          <Link to={"hotelSpecific/" + id}>
            <button className="btn btn__card">Details</button>
          </Link>
          <DeleteHotel id={id} />
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

HotelDelete.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default HotelDelete;
