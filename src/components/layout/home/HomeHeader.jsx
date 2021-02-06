import React from "react";
import LazyLoad from "react-lazyload";
import Header from "../../../images/header2.jpg";

function HomeHeader() {
  return (
    <LazyLoad resize={true}>
      <div className="header">
        <img
          width="1414"
          height="826"
          src={Header}
          className="header__home"
          alt="company header Holidaze"
        />
      </div>
    </LazyLoad>
  );
}

export default HomeHeader;
