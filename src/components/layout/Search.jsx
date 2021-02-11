import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

function Search({ handleSearch }) {
  return (
    <Form className="search search__home">
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

export default Search;
