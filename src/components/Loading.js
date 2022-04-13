import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="main">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
