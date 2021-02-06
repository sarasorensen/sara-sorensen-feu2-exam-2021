import React, { lazy, Suspense } from "react";
import HomeDropdown from "./HomeDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../Loader";

const Heading = lazy(() => import("../Heading"));
const HomeHeader = lazy(() => import("./HomeHeader"));

function Home() {
  <Heading title="Home" />;

  const renderLoader = () => <Loader />;

  return (
    <Container>
      <Suspense fallback={renderLoader()}>
        <HomeHeader />
      </Suspense>
      <Row className="home">
        <Col className="home__col">
          <h1>Find a place to stay</h1>
          <p className="home__sub">
            Explore and discover our Hotels, Spa's and more!
          </p>
          <HomeDropdown />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
