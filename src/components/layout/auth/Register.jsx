import React from "react";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Row, Col, Form } from "react-bootstrap";
import { Email, Lock, PersonFill } from "../../constants/icons";

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

  const history = useHistory();

  async function onSubmit(data) {
    localStorage.setItem("username", data.email);
    localStorage.setItem("password", data.password);

    history.push("/login");
  }

  return (
    <Row className="form">
      <Col className="form__col--1 col-sm-11   col-lg-6">
        <PersonFill />
        <p className="form__info">
          Do you have an existing account?{" "}
          <Link to="/login" className="link link__blue">
            Log in here
          </Link>
        </p>
      </Col>
      <Col className="form__col--2 col-sm-11 col-lg-6">
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <Heading title="Register" />
          <Form.Group>
            <Form.Label htmlFor="email" className="form__label">
              {" "}
              <Email />
              Email
            </Form.Label>
            <Form.Control
              name="email"
              id="email"
              type="email"
              className={`form-control form__control ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Enter an email address"
              ref={register}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password" className="form__label">
              {" "}
              <Lock />
              Password
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              id="password"
              className={`form-control form__control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter a password"
              ref={register}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </Form.Group>

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
