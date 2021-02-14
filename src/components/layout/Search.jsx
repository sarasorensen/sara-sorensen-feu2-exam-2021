import React from "react";
import Form from "react-bootstrap/Form";

function Search({ handleSearch }) {
  return (
    <Form className="search ">
      <div className="input-group">
        <input
          type="search"
          className="search__input form-control"
          placeholder="Search hotels, spa's..."
          aria-label="Search hotel by name"
          onChange={(event) => handleSearch(event)}
        />{" "}
      </div>
    </Form>
  );
}

export default Search;
