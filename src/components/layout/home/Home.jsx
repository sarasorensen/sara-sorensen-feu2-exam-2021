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
