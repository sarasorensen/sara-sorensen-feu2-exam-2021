import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constants/api";
import { Row, Col } from "react-bootstrap";

function AddHotel() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    image: Yup.string().required("Image Url is required"),
    address: Yup.string().required("address is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    maxGuests: Yup.string().required("Max Guests is required"),
    price: Yup.string().required("Price is required"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const history = useHistory();

  async function onSubmit(data) {
    const url = BASE_URL + "establishments";

    const options = {
      headers,
      method: POST,
      body: JSON.stringify(data),
    };

    await fetch(url, options);

    history.push("/success");
  }

  return (
    <Row className="form form__newHotel">
      <Col className="form__col--2 col-sm-11 col-lg-6">
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <h2>Add Hotel</h2>
          <Form.Group>
            <Form.Label htmlFor="name" className="form__label">
              Hotel Name
            </Form.Label>
            <Form.Control
              name="name"
              type="text"
              id="name"
              ref={register}
              className={`form-control form__control ${
                errors.name ? "is-invalid" : ""
              }`}
              placeholder="Enter a name for the hotel"
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="image" className="form__label">
              Image Url
            </Form.Label>
            <Form.Control
              name="image"
              type="text"
              id="image"
              ref={register}
              className={`form-control form__control ${
                errors.image ? "is-invalid" : ""
              }`}
              placeholder="http://example.com"
            />
            <div className="invalid-feedback">{errors.image?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email" className="form__label">
              Email
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              id="email"
              className={`form-control form__control ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Enter an email address"
              ref={register}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="address" className="form__label">
              Adress
            </Form.Label>
            <Form.Control
              name="address"
              type="text"
              id="address"
              className={`form-control form__control ${
                errors.address ? "is-invalid" : ""
              }`}
              placeholder="Enter an address"
              ref={register}
            />
            <div className="invalid-feedback">{errors.address?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="price" className="form__label">
              Price per night
            </Form.Label>
            <Form.Control
              name="price"
              type="number"
              id="price"
              className={`form-control form__control ${
                errors.price ? "is-invalid" : ""
              }`}
              placeholder="Enter a number"
              ref={register}
            />
            <div className="invalid-feedback">{errors.price?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="maxGuests" className="form__label">
              Max Guests
            </Form.Label>
            <Form.Control
              name="maxGuests"
              type="number"
              id="maxGuests"
              className={`form-control form__control ${
                errors.maxGuests ? "is-invalid" : ""
              }`}
              placeholder="Enter a number"
              ref={register}
            />
            <div className="invalid-feedback">{errors.maxGuests?.message}</div>
          </Form.Group>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" type="reset">
            Reset
          </button>
        </Form>
      </Col>
    </Row>
  );
}

export default AddHotel;
