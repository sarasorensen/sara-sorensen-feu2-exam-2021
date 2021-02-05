import React from "react";
import { useForm } from "react-hook-form";
//import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Person, Email } from "../../constants/icons";

function Enquiry() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Hotel Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //const history = useHistory();

  async function onSubmit(data) {
    console.log(data);
    const enquiryInput = {
      name: data.name,
      email: data.email,
      checkIn: data.checkin,
      checkOut: data.checkout,
    };

    const url = BASE_URL + "enquiries";

    const options = {
      headers: headers,
      method: POST,
      body: JSON.stringify(enquiryInput),
    };

    console.log(options);

    fetch(url, options)
      .then((r) => r.json())
      .then((j) => console.log(j));

    //history.push("/admin/hotels");
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
            <Form.Label htmlFor="checkin" className="form__label">
              Check In
            </Form.Label>
            <input
              name="checkin"
              id="checkin"
              label="Next appointment"
              type="date"
              ref={register}
              className={`form__control ${errors.checkin ? "is-invalid" : ""}`}
              required={true}
            />
            <div className="invalid-feedback">{errors.checkin?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="checkout" className="form__label">
              Check Out
            </Form.Label>
            <input
              name="checkout"
              id="checkout"
              label="Next appointment"
              type="date"
              ref={register}
              className={`form__control ${errors.checkout ? "is-invalid" : ""}`}
              required={true}
            />
            <div className="invalid-feedback">{errors.checkout?.message}</div>
          </Form.Group>
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Col>
    </Row>
  );
}

export default Enquiry;
