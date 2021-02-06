import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./home/Home";
import Hotels from "./hotels/Hotels";
import Contact from "./contact/Contact";
import Login from "./auth/Login";
import HotelSpecific from "./hotels/HotelSpecific";
import Enquiry from "./enquiry/EnquiryForm";
import Admin from "./admin/Admin";
import EditHotels from "./admin/EditHotel";
import Success from "./admin/Success";
import Logo from "../../images/logo-y2.png";
import Footer from "./Footer";
import { Person } from "../constants/icons";

const Layout = () => (
  <Router>
    <Navbar expand="lg">
      <NavLink className="left-align" to="/" exact>
        <img
          src={Logo}
          className="logo"
          alt="Holidaze Logo"
          width="1946"
          height="689"
        />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ml-auto">
          <NavLink to="/" exact className="navbar__link order-md-0 mx-auto">
            Home
          </NavLink>
          <NavLink to="/hotels" className="navbar__link">
            Hotels
          </NavLink>
          <NavLink to="/contact" className="navbar__link ">
            Contact
          </NavLink>
          <NavLink to="/login" className="navbar__link">
            <span className="sr-only">Log In</span>
            <Person />
          </NavLink>
          <NavLink
            to="/admin"
            exact
            className="navbar__link order-md-0 mx-auto"
          >
            Admin
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/login" component={Login} />
        <Route path="/hotelSpecific/:id" component={HotelSpecific} />
        <Route path="/enquiry/:id" component={Enquiry} />
        <Route path="/admin" component={Admin} />
        <Route path="/editHotels" component={EditHotels} />
        <Route path="/success" component={Success} />
      </Switch>
    </Container>
    <Footer />
  </Router>
);

export default Layout;
