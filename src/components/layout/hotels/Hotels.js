import React, { useState, useEffect, lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";

const Heading = lazy(() => import("../Heading"));
const Search = lazy(() => import("../Search"));
const HotelCard = lazy(() => import("./HotelCard"));

function Hotels() {
  <Heading title="Hotels" />;

  window.localStorage.removeItem("email");

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = BASE_URL + "establishments";

    fetch(url, FETCH_OPTIONS)
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

  const filterHotels = function (e) {
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

  const renderLoader = () => (
    <div className="spinner">
      <Spinner role="status" className="spinner__animation" />
      <span className="sr-only">Loading content...</span>
    </div>
  );

  return (
    <Container>
      <h1 className="main__title">Our Hotels</h1>
      <Suspense fallback={renderLoader()}>
        <Search handleSearch={filterHotels} />
      </Suspense>
      <Row className="hotel">
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
export default Hotels;
