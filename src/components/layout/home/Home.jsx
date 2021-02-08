import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../Loader";

const HomeDropdown = lazy(() => import("./HomeDropdown"));
const Heading = lazy(() => import("../Heading"));

function Home() {
  <Heading title="Home" />;

  const renderLoader = () => <Loader />;

  return (
    <Container>
      <div className="header"></div>
      <Row className="home">
        <Col className="home__col">
          <h2 className="title__home">Find a place to stay</h2>
          <p className="home__sub">
            Explore and discover our Hotels, Spa's and more!
          </p>
          <Suspense fallback={renderLoader()}>
            <HomeDropdown />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
