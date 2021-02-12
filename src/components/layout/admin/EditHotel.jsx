import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import { Row, Col, Form } from "react-bootstrap";
function AddHotel() {
  const defaultState = {
    name: "",
    image: "",
    address: "",
    email: "",
    maxGuests: "",
    price: "",
    description: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    image: Yup.string().required("Image Url is required"),
    address: Yup.string().required("address is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    maxGuests: Yup.string().required("Max Guests is required"),
    price: Yup.string().required("Price is required"),
    description: Yup.string()
      .min(20, "Description must contain 20 characters or more")
      .required("Description is required"),
  });
  const history = useHistory();
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });
  let { id } = useParams();
  const [hotel, sethotel] = useState(defaultState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };
    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setError("A server error occured.");
        }
      })
      .then((json) => {
        sethotel(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div className="error">{error}</div>;
  }
  async function onSubmit(data) {
    const url = BASE_URL + "establishments/" + id;
    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    fetch(url, updateOptions)
      .then((r) => r.json())
      .then((j) => console.log(j));
    history.push("/adminHotel");
  }
  return (
    <Row className="form form__newHotel">
      <Col className="form__col--2 col-sm-11 col-lg-6">
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <h2>Edit Hotel</h2>
          <Form.Group>
            <Form.Label htmlFor="name" className="form__label">
              Hotel Name
            </Form.Label>
            <Form.Control
              name="name"
              type="text"
              id="name"
              defaultValue={hotel.name}
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
              defaultValue={hotel.image}
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
              defaultValue={hotel.email}
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
              defaultValue={hotel.address}
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
              defaultValue={hotel.price}
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
              defaultValue={hotel.maxGuests}
              className={`form-control form__control ${
                errors.maxGuests ? "is-invalid" : ""
              }`}
              placeholder="Enter a number"
              ref={register}
            />
            <div className="invalid-feedback">{errors.maxGuests?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description" className="form__label">
              Description
            </Form.Label>
            <Form.Control
              name="description"
              type="text"
              id="description"
              defaultValue={hotel.description}
              className={`form-control form__control ${
                errors.description ? "is-invalid" : ""
              }`}
              placeholder="Enter a description"
              ref={register}
            />
            <div className="invalid-feedback">
              {errors.description?.message}
            </div>
          </Form.Group>
          <div className="admin__buttons">
            <button className="btn" type="submit">
              Update
            </button>
            <button className="btn" type="reset">
              Reset
            </button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
export default AddHotel;
