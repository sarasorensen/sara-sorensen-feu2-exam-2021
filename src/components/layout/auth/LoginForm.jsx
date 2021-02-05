import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Email, Lock, PersonFill } from "../../constants/icons";

function LoginForm() {
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
    localStorage.setItem("loginInfo", data.email);

    history.push("/admin");
  }

  return (
    <Row className="form">
      <Col className="form__col--1 col-sm-11   col-lg-6">
        <PersonFill />
        <p className="form__info">
          If you have an existing admin user, please enter your email and
          password in this form.
        </p>
      </Col>
      <Col className="form__col--2 col-sm-11 col-lg-6">
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <h2 className="main__title">Log in</h2>
          <Form.Group>
            <Form.Label htmlFor="email" className="form__label">
              {" "}
              <Email />
              Email
            </Form.Label>
            <Form.Control
              name="email"
              id="email"
              type="text"
              className={`form__control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter an email address"
              ref={register}
              required={true}
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
              className={`form__control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter a password"
              ref={register}
              required={true}
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

export default LoginForm;
