import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, headers } from "../../constants/api";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = { headers };

  useEffect(() => {
    const url = BASE_URL + "enquiries";
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
  });

  if (loading) {
    return (
      <div className="spinner">
        <Spinner role="status" className="spinner__animation" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  function List({ enquiries, fallback }) {
    if (!enquiries || enquiries.length === 0) {
      return fallback;
    } else {
      return (
        <div className="admin__col">
          <h2>Enquiries</h2>

          {enquiries.map((item) => {
            return (
              <div key={item.id} className="admin__box">
                <ul>
                  <li>
                    {" "}
                    <h3>{item.name}</h3>
                  </li>
                  <li>
                    {" "}
                    <p>Email: {item.email} </p>
                  </li>
                  <li>
                    {" "}
                    <p>Check in: {item.checkIn}</p>
                  </li>
                  <li>
                    <p>Check Out: {item.checkOut}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return (
    <List
      enquiries={enquiries}
      fallback={"Cant fetch Enquiries... Try to refresh."}
    />
  );
}
