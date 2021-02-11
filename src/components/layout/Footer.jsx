import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/rel-icon.png";
import { Facebook, Twitter, LinkedIn } from "../constants/icons";
import LazyLoad from "react-lazyload";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__col">
        <h2 className="title__white">Socials</h2>
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
      </div>
      <div className="footer__col">
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
      </div>
      <div className="footer__col">
        <h2 className="title__white">Links</h2>
        <ul className="footer__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/hotels">Hotels</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
