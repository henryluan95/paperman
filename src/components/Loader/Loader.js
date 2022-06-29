import "./Loader.scss";

import React from "react";

const Loader = () => {
  return (
    <div className="spinner">
      <div className="spinner__circle">
        <div className="spinner__circle2"></div>
      </div>
    </div>
  );
};

export default Loader;
