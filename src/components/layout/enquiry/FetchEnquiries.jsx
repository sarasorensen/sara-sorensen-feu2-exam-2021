import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Moment from "react-moment";
import DeleteEnquiry from "./DeleteEnquiry";
import Loader from "../Loader";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = BASE_URL + "enquiries";
    const options = { headers };

    fetch(url, options)
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        } else {
          setError("A server error occured.");
        }
      })
      .then(function (json) {
        setEnquiries(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const List = ({ enquiries, fallback }) => {
    if (!enquiries || enquiries.length === 0) {
      return fallback;
    } else {
      return (
        <>
          <h2>Enquiries</h2>

          {enquiries.map((item) => {
            return (
              <div key={item.id} className="admin__box">
                <ul>
                  <li>
                    {" "}
                    <h3 className="admin__headings">{item.name}</h3>
                  </li>
                  <li>
                    {" "}
                    <a
                      className="link link__blue"
                      href={"mailto:" + item.email}
                    >
                      {item.email}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <p>
                      Check in date:{" "}
                      <Moment format="YYYY/MM/DD">{item.checkIn}</Moment>
                    </p>
                  </li>
                  <li>
                    <p>
                      Check Out date:{" "}
                      <Moment format="YYYY/MM/DD">{item.checkOut}</Moment>
                    </p>
                  </li>
                  <li>
                    <p>Hotel id: {item.establishmentId}</p>
                  </li>
                </ul>

                <div className="admin__buttons">
                  <a className="btn" href={"mailto:" + item.email}>
                    Reply
                  </a>
                  <DeleteEnquiry id={item.id} />
                </div>
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <List
      enquiries={enquiries}
      fallback={"Cant fetch Enquiries... Try to refresh."}
    />
  );
}

export default Enquiries;
