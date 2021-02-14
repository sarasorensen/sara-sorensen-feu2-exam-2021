import React, { useState } from "react";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Row, Col, Form } from "react-bootstrap";
import {
  PersonPlusFill,
  InboxFill,
  LockFill,
  EyeFill,
} from "react-bootstrap-icons";

function Register() {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
      .required("Password is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const history = useHistory();

  async function onSubmit(data) {
    localStorage.setItem("username", data.email);
    localStorage.setItem("password", data.password);

    history.push("/login");
  }

  return (
    <div className="login">
      <Row className="form">
        <Col className="form__col--1 col-sm-11   col-lg-6">
          <PersonPlusFill size={100} className="icon__form" />
          <ul>
            <li className="form__info"> Do you have an existing account?</li>
            <li>
              {" "}
              <Link to="/login" className="link link__blue">
                Log in here
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="form__col--2 col-sm-11 col-lg-6">
          <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <Heading title="Register" />
            <Form.Group>
              <Form.Label htmlFor="email" className="form__label">
                {" "}
                <InboxFill className="icon" />
                Email
              </Form.Label>
              <Form.Control
                name="email"
                id="email"
                type="email"
                className={`form-control form__control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Create an email address"
                ref={register}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password" className="form__label">
                {" "}
                <LockFill className="icon" />
                Password
              </Form.Label>
              <div className="password__wrapper">
                <Form.Control
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  autoComplete="on"
                  className={`form-control form__control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Create a password"
                  ref={register}
                />
                <EyeFill
                  className="icon icon__password"
                  onClick={togglePasswordVisiblity}
                />
              </div>
              <div className="invalid-feedback">{errors.password?.message}</div>
            </Form.Group>

            <button className="btn" type="submit">
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
