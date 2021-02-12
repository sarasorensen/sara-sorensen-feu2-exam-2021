import React, { useState, useEffect, lazy, Suspense } from "react";
import Heading from "../Heading";
import { BASE_URL, headers } from "../../constants/api";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../Loader";

const Search = lazy(() => import("../Search"));
const HotelCard = lazy(() => import("./HotelCard"));

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
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
        setFilteredHotels(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterHotels = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = hotels.filter(function (h) {
      const lowerCaseName = h.name.toLowerCase();

      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredHotels(filteredArray);
  };

  const renderLoader = () => <Loader />;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (filteredHotels === undefined || filteredHotels.length === 0) {
    return (
      <Container>
        <Heading title="No Match" />
        <Row className="hotel">
          <Suspense fallback={renderLoader()}>
            <Search handleSearch={filterHotels} />
          </Suspense>
          <Col className="hotel__error">
            <p>Your search didn't match any hotel names</p>
            <p>Please try something else</p>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Heading title="Our Hotels" />
        <Row className="hotel">
          <Suspense fallback={renderLoader()}>
            <Search handleSearch={filterHotels} />
          </Suspense>

          {filteredHotels.map((hotel) => {
            const { id, name, image, price, email } = hotel;

            return (
              <Col className="col-sm-12 col-md-6 col-lg-4" key={id}>
                <Suspense fallback={renderLoader()}>
                  <HotelCard
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    email={email}
                  />
                </Suspense>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Hotels;
