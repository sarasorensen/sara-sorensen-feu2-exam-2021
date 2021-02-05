import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../Loader";

const Heading = lazy(() => import("../Heading"));
const HomeHeader = lazy(() => import("./HomeHeader"));
const HomeCard = lazy(() => import("./HomeCard"));
const InfoBoxes = lazy(() => import("./InfoBoxes"));
const Search = lazy(() => import("../Search"));

export function Home() {
  <Heading title="Home" />;

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const node = useRef();
  const [dropdown, setDropdown] = useState(false);

  const toggling = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (node.current && node.current.contains(event.target)) {
        setIsSearched(true);
        return;
      }
      setIsSearched(false);
      setDropdown(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [node]);

  const filterHotels = function (e) {
    setIsSearched(true);
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = hotels.filter(function (h) {
      const lowerCaseName = h.name.toLowerCase();

      if (searchValue.length === 0) {
        setIsSearched(false);
      }

      if (searchValue === undefined || searchValue === null) {
        console.log("sorry no match");
      }

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
      <Suspense fallback={renderLoader()}>
        <HomeHeader />
      </Suspense>
      <Row className="home">
        <Col className="home__col">
          <h1>Find your dream hotel in Bergen</h1>

          <div>
            <Suspense fallback={renderLoader()}>
              <Search handleSearch={filterHotels} onChange={toggling} />
            </Suspense>

            <div
              ref={node}
              className={
                dropdown !== true && isSearched === false
                  ? "d-none "
                  : "d-block dropdown "
              }
            >
              {filteredHotels.map((hotel) => {
                const { id, name, image, price } = hotel;
                return (
                  <Col className="col-sm-12 col-md-8 col-lg-6" key={id}>
                    {" "}
                    <Suspense fallback={renderLoader()}>
                      <HomeCard
                        className="dropdown__card "
                        id={id}
                        image={image}
                        name={name}
                        price={price}
                      />{" "}
                    </Suspense>
                  </Col>
                );
              })}
            </div>
          </div>
        </Col>
        <Suspense fallback={renderLoader()}>
          <InfoBoxes />
        </Suspense>
      </Row>
    </Container>
  );
}

export default Home;
