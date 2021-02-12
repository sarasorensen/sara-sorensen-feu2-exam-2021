import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../layout/auth/Logout";
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
import Register from "./auth/Register";
import HotelSpecific from "./hotels/HotelSpecific";
import Enquiry from "./enquiry/EnquiryForm";
import Admin from "./admin/Admin";
import AdminHotel from "./admin/AdminHotel";
import EditHotel from "./admin/EditHotel";
import Logo from "../../images/logo-y.png";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import { Person } from "../constants/icons";

function Layout() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Navbar expand="lg">
        <NavLink className="logo" to="/" exact>
          <img
            src={Logo}
            className="logo__img"
            alt="Holidaze Logo"
            width="1546"
            height="362"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <NavLink to="/" exact className="navbar__link order-md-0">
              Home
            </NavLink>
            <NavLink to="/hotels" className="navbar__link">
              Hotels
            </NavLink>
            <NavLink to="/contact" className="navbar__link ">
              Contact
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/admin"
                  className="navbar__link"
                  activeClassName="active"
                >
                  Admin
                </NavLink>
                <Logout />
              </>
            ) : (
              <NavLink to="/login" className="navbar__link">
                Log In <Person />
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Switch>
          <ScrollToTop>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/hotelSpecific/:id" component={HotelSpecific} />
            <Route path="/enquiry/:id" component={Enquiry} />
            <Route path="/admin" component={Admin} />
            <Route path="/adminHotel" component={AdminHotel} />
            <Route path="/editHotel/:id" component={EditHotel} />
          </ScrollToTop>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Layout;
