import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Person, Email, Message, Envelope } from "../../constants/icons";

export default function Contact() {
  window.localStorage.removeItem("email");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const history = useHistory();

  async function onSubmit(data) {
    const url = BASE_URL + "contacts";

    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);

    history.push("/admin/hotels");
  }

  return (
    <Row className="form">
      <Col className="form__col--1 col-sm-11   col-lg-6">
        <Envelope />
        <p className="form__info">
          If you have any questions or just want to get in touch, use the
          contact form. We look forward to hearing from you!
        </p>
      </Col>
      <Col className="form__col--2 col-sm-11 col-lg-6">
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <h2 className="main__title">Contact Us</h2>
          <Form.Group>
            <Form.Label htmlFor="name" className="form__label">
              {" "}
              <Person />
              Name
            </Form.Label>
            <Form.Control
              name="name"
              id="name"
              type="text"
              className={`form__control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter a name"
              ref={register}
              required={true}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email" className="form__label">
              {" "}
              <Email />
              Email
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              id="email"
              className={`form__control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter an email"
              ref={register}
              required={true}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message" className="form__label">
              <Message />
              Message:
            </Form.Label>
            <textarea
              name="message"
              id="message"
              type="text"
              className={`form__control ${errors.message ? "is-invalid" : ""}`}
              placeholder="Enter a message"
              ref={register}
              required={true}
            />
            <div className="invalid-feedback">{errors.message?.message}</div>
          </Form.Group>

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Col>
    </Row>
  );
}
