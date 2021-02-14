import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import { PersonFill, InboxFill, LockFill } from "react-bootstrap-icons";

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
  const { loginInput } = useContext(AuthContext);

  async function onSubmit(data, e) {
    e.preventDefault();

    const userName = localStorage.getItem("username", data.email);
    const password = localStorage.getItem("password", data.password);

    if (userName === data.email && password === data.password) {
      loginInput(data.username, data.password);
      handleSuccess();
    } else {
      handleError();
    }
  }

  const [showError, setShowError] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);

  const handleError = () => setShowError(true);
  const closeError = () => setShowError(false);

  const handleSuccess = () => setRunSuccess(true);
  const closeSuccess = () => setRunSuccess(false);

  const admin = () => {
    history.push("/admin");
    history.go(0);
  };

  const reload = () => history.go(0);

  return (
    <>
      <Modal
        className="modal fade"
        role="dialog"
        centered
        aria-labelledby="Modal"
        aria-hidden="true"
        show={runSuccess}
        onExit={admin}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Admin Dashboard will show once you close this window.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeSuccess}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        className="modal fade"
        role="dialog"
        centered
        aria-labelledby="Modal"
        aria-hidden="true"
        show={showError}
        onExit={reload}
      >
        <Modal.Header closeButton>
          <Modal.Title>Somethint went wrong!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Check that you have the right email and password. Don't have an
            account?{" "}
            <Link to="/register" className="link link__blue">
              Register here
            </Link>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="form">
        <Col className="form__col--1 col-sm-11   col-lg-6">
          <PersonFill size={100} className="icon__form" />
          <p className="form__info">
            Don't have an account?{" "}
            <Link to="/register" className="link link__blue">
              Register here
            </Link>
          </p>
        </Col>
        <Col className="form__col--2 col-sm-11 col-lg-6">
          <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <Heading title="Log In" />
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
                placeholder="Enter an email address"
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
    </>
  );
}

export default LoginForm;
