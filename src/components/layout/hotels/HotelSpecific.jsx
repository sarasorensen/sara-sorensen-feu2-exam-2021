import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../Loader";
import { Wifi, Cup, Geo } from "react-bootstrap-icons";
import Heading from "../Heading";

function HotelSpecific() {
  const [hotel, sethotel] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setError("A server error occured.");
        }
      })
      .then((json) => {
        sethotel(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  localStorage.setItem("name", hotel.name);
  localStorage.setItem("image", hotel.image);

  return (
    <Container className="specific">
      <Row>
        <Col className="specific__col col-sm-12 col-md-6 col-lg-4">
          <img src={hotel.image} className="specific__img" alt={hotel.name} />
        </Col>
        <Col className="specific__details col-sm-12 col-md-6 col-lg-4">
          <Heading className="specific__title" title={hotel.name} />
          <p>Max {hotel.maxGuests} guests</p>
          <p>
            {" "}
            Price per night is{" "}
            <span className="hotel__price"> {hotel.price}$</span>
          </p>
          <p>{hotel.description}</p>
          <p>
            {" "}
            If you have any questions, please contact:{" "}
            <a className="link link__blue" href={"mailto:" + hotel.email}>
              {hotel.email}
            </a>
          </p>
          <Row className="d-flex jc-center text-center specific__icons">
            <Col>
              <Wifi size={40} className="icon__spec" />
              <p>Wifi included</p>
            </Col>
            <Col>
              <Cup size={40} className="icon__spec" />
              <p>Breakfast included</p>
            </Col>
            <Col>
              <Geo size={40} className="icon__spec" />
              <p>Central Location</p>
            </Col>
          </Row>
          <Link to={"/enquiry/" + id}>
            <button className="btn ">Book Hotel</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelSpecific;
