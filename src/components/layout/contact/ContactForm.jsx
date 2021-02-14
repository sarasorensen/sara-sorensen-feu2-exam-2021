import React, { useState } from "react";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import { BASE_URL, headers, POST } from "../../constants/api";
import {
  PersonFill,
  InboxFill,
  Envelope,
  ChatDotsFill,
} from "react-bootstrap-icons";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data) {
    const url = BASE_URL + "contacts";

    const options = {
      headers,
      method: POST,
      body: JSON.stringify(data),
    };

    await fetch(url, options);

    handleShow();
  }

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
  };

  const reload = () => window.location.reload();

  return (
    <>
      <Modal
        className="modal fade"
        role="dialog"
        centered
        aria-labelledby="Modal"
        aria-hidden="true"
        show={showModal}
        onExit={reload}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your message!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We will get back to you shortly, please check your email for this.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="form">
        <Col className="form__col--1 col-sm-11   col-lg-6">
          <Envelope size={100} className="icon__form" />
          <p className="form__info">
            If you have any questions or just want to get in touch, use the
            contact form. We look forward to hearing from you!
          </p>
        </Col>
        <Col className="form__col--2 col-sm-11 col-lg-6">
          <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <Heading title="Contact Us" />
            <Form.Group>
              <Form.Label htmlFor="name" className="form__label">
                {" "}
                <PersonFill className="icon" />
                Name
              </Form.Label>
              <Form.Control
                name="name"
                id="name"
                type="text"
                className={`form-control form__control ${
                  errors.name ? "is-invalid" : ""
                }`}
                placeholder="Enter a name"
                ref={register}
              />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email" className="form__label">
                {" "}
                <InboxFill className="icon" />
                Email
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                id="email"
                className={`form-control form__control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter an email"
                ref={register}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message" className="form__label">
                <ChatDotsFill className="icon" />
                Message:
              </Form.Label>
              <textarea
                name="message"
                id="message"
                type="text"
                className={`form-control form__control ${
                  errors.message ? "is-invalid" : ""
                }`}
                placeholder="Enter a message"
                ref={register}
              />
              <div className="invalid-feedback">{errors.message?.message}</div>
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

export default ContactForm;
