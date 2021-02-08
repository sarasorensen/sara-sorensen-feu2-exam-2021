import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Heading from "../Heading";
import { BASE_URL, headers } from "../../constants/api";
import EditHotelCard from "./EditHotelCard";
import NewHotelForm from "./NewHotelForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Lock, House, Admin } from "../../constants/icons";

function EditHotel() {
  <Heading title="Admin Delete and Add Hotel" />;
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = BASE_URL + "establishments";
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
        setHotels(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner role="status" className="spinner__animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  function List({ hotels, fallback }) {
    if (!hotels || hotels.length === 0) {
      return fallback;
    } else {
      return (
        <>
          {hotels.map((hotel) => {
            const { id, name, image, price, email } = hotel;

            return (
              <div className=" col-sm-12 col-md-6 col-lg-4" key={id}>
                <EditHotelCard
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                  email={email}
                />
              </div>
            );
          })}
        </>
      );
    }
  }

  return (
    <Container className="admin">
      <h2 className="main__title">Edit Hotels</h2>
      <Row>
        <div className="admin__col">
          <div className="adminNav">
            <Link to="/admin">
              <Admin />
              Admin
            </Link>
            <a href="#newHotel">
              <House />
              Create New Hotel
            </a>
            <a href="/login">
              {" "}
              <Lock />
              Log Out
            </a>
          </div>
        </div>
        <div className="admin__col admin__col--hotels">
          <div className="admin__box text-center">
            <p>
              <span className="form__error"> NB!</span> All deletions are final.
              To ensure a good user experience, do not delete hotels that have
              not been authorized.{" "}
            </p>
          </div>

          <List hotels={hotels} fallback={"Loading..."} />
        </div>
        <div id="newHotel" className="admin__col">
          <NewHotelForm />
        </div>
      </Row>
    </Container>
  );
}

export default EditHotel;
