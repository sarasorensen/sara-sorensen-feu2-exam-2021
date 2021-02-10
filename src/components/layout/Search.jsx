import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

export default function Search({ handleSearch }) {
  return (
    <Form className="search">
      <div className="input-group">
        <input
          type="search"
          className="search__input form-control"
          placeholder="Search hotels, spa's..."
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(event) => handleSearch(event)}
        />{" "}
      </div>
    </Form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
