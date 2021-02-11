import React, { useState, useEffect, lazy, Suspense } from "react";
import Heading from "../Heading";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../Loader";

const Search = lazy(() => import("../Search"));
const HotelCard = lazy(() => import("./HotelCard"));

function Hotels() {
  <Heading title="Hotels" />;

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

  const renderLoader = () => <Loader />;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <Container>
      <h1 className="title__grey">Our Hotels</h1>
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
export default Hotels;
