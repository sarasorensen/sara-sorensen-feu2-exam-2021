import React, { lazy, Suspense } from "react";
import Heading from "../Heading";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../Loader";

const HomeDropdown = lazy(() => import("./HomeDropdown"));

function Home() {
  <Heading title="Home" />;

  const renderLoader = () => <Loader />;

  return (
    <Container>
      <div className="header"></div>
      <Row className="home">
        <Col className="home__col">
          <h1 className="title__white">Find a place to stay</h1>
          <h2 className="home__info">
            Discover Bergen's hotels, B&Bs and more
          </h2>
          <Suspense fallback={renderLoader()}>
            <HomeDropdown />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
