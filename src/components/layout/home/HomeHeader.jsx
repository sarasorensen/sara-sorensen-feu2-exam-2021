import React from "react";
import LazyLoad from "react-lazyload";

function HomeHeader() {
  return (
    <LazyLoad resize={true}>
      <div className="header"></div>
    </LazyLoad>
  );
}

export default HomeHeader;
