import React, { useState } from "react";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BASE_URL, POST, headers } from "../../constants/api";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import {
  PersonFill,
  InboxFill,
  CalendarCheckFill,
} from "react-bootstrap-icons";

function EnquiryForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    checkIn: Yup.date()
      .typeError("Check in must be of type date")
      .min(new Date(), "Check in date can not be a former date than today")
      .required("A check in date must be selected"),
    checkOut: Yup.date()
      .typeError("Check out must be of type date")
      .when(
        "checkIn",
        (checkIn, schema) =>
          checkIn &&
          schema.min(
            checkIn,
            "The check out date must be after the check in date"
          )
      )
      .required("A check out date must be selected"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { id } = useParams();

  async function onSubmit(data) {
    const url = BASE_URL + "enquiries";

    const options = {
      headers,
      method: POST,
      body: JSON.stringify(data),
    };

    await fetch(url, options);

    handleShow();
  }

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
  };
  const reload = () => window.location.reload();

  const name = localStorage.getItem("name");
  const image = localStorage.getItem("image");

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
          <Modal.Title>Thank you for your enquiry!</Modal.Title>
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
        <Col className="form__col--1 col-sm-11 col-lg-6">
          <h2 className="enquiry__name">{name}</h2>
          <img className="enquiry__hotel" src={image} alt={name} />
          <p className="form__info">
            Thank you for choosing Holidaze to book your hotel with. Don't worry
            about making any mistakes when booking your hotel, as this can be
            changed later via email support.
          </p>
        </Col>
        <Col className="form__col--2 col-sm-11 col-lg-6">
          <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <Heading title="Enquiry" />
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
                ref={register}
                className={`form-control form__control ${
                  errors.name ? "is-invalid" : ""
                }`}
                placeholder="Enter a name"
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
              <Form.Label htmlFor="checkIn" className="form__label">
                <CalendarCheckFill className="icon" />
                Check In
              </Form.Label>
              <Form.Control
                name="checkIn"
                id="checkIn"
                label="Check In Date"
                type="date"
                ref={register}
                className={`form-control form__control ${
                  errors.checkIn ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.checkIn?.message}</div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="checkOut" className="form__label">
                <CalendarCheckFill className="icon" />
                Check Out
              </Form.Label>
              <Form.Control
                name="checkOut"
                id="checkOut"
                label="Check Out Date"
                type="date"
                ref={register}
                className={`form-control form__control ${
                  errors.checkOut ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.checkOut?.message}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="establishmentId" className="form__label">
                Hotel ID
              </Form.Label>
              <Form.Control
                name="establishmentId"
                id="establishmentId"
                label="Hotel Id"
                value={id}
                readOnly
                ref={register}
                className={`form-control form__control ${
                  errors.establishmentId ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.establishmentId?.message}
              </div>
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

export default EnquiryForm;
