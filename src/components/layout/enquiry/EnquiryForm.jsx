import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Person, Email } from "../../constants/icons";

function EnquiryForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { id } = useParams();

  const history = useHistory();

  async function onSubmit(data) {
    console.log(data);

    const enquiryInput = {
      name: data.name,
      email: data.email,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      establishmentId: data.establishmentId,
    };

    const url = BASE_URL + "enquiries";

    const options = {
      headers: headers,
      method: POST,
      body: JSON.stringify(enquiryInput),
    };

    await fetch(url, options);

    history.push("/admin/hotels");
  }

  const name = localStorage.getItem("name");
  const image = localStorage.getItem("image");

  return (
    <Row className="form">
      <Col className="form__col--1 col-sm-11 col-lg-6">
        <h1 className="enquiry__name">{name}</h1>
        <img className="enquiry__hotel" src={image} alt={name} />
        <p className="form__info">
          Thank you for choosing Holidaze to book your hotel with. Don't worry
          about making any mistakes when booking your hotel, as this can be
          changed later via email support.
        </p>
      </Col>
      <Col className="form__col--2 col-sm-11 col-lg-6">
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <h2 className="main__title">Enquiry</h2>
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
              ref={register}
              className={`form__control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter a name"
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
            <Form.Label htmlFor="checkIn" className="form__label">
              Check In
            </Form.Label>
            <Form.Control
              name="checkIn"
              id="checkIn"
              label="Check In Date"
              type="date"
              defaultValue="2021-02-14"
              ref={register}
              className={`form__control ${errors.checkIn ? "is-invalid" : ""}`}
              required={true}
            />
            <div className="invalid-feedback">{errors.checkIn?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="checkOut" className="form__label">
              Check Out
            </Form.Label>
            <Form.Control
              name="checkOut"
              id="checkOut"
              label="Check Out Date"
              type="date"
              defaultValue="2021-02-15"
              ref={register}
              className={`form__control ${errors.checkOut ? "is-invalid" : ""}`}
              required={true}
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
              className={`form__control ${
                errors.establishmentId ? "is-invalid" : ""
              }`}
              required={true}
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
  );
}

export default EnquiryForm;
