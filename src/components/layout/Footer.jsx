import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/rel-icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Facebook, Twitter, LinkedIn } from "../constants/icons";
import LazyLoad from "react-lazyload";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col className="footer__col">
          <h2 className="footer__heading">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col className="footer__col">
          <LazyLoad resize={true}>
            <NavLink to="/" exact>
              <img
                src={Logo}
                className="footer__logo"
                width="150"
                height="188"
                alt="Company mini logo Holidaze"
              />
            </NavLink>
          </LazyLoad>
          <p>Bergen street 1</p>
          <p> (+47) 51 66 00 00</p>
          <a href="mailto: holidaze@company.com">holidaze@company.com</a>
          <p className="name"> Holidaze &copy; 2021</p>
        </Col>
        <Col className="footer__col">
          <h2 className="footer__heading">Links</h2>
          <ul className="footer__menu">
            <li>
              <a href="home"> Home</a>
            </li>
            <li>
              <a href="hotels"> Hotels</a>
            </li>
            <li>
              <a href="contact"> Contact</a>
            </li>
          </ul>
          <div className="footer__icons">
            <a href="https://www.facebook.com/">
              {" "}
              <span className="sr-only">Facebook Logo</span>
              <Facebook />
            </a>
            <a href="https://twitter.com/twitter">
              {" "}
              <span className="sr-only">Twitter Logo</span>
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/feed/">
              {" "}
              <span className="sr-only">LinkedIn Logo</span>
              <LinkedIn />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
