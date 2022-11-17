import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h3>Ooops!!!, sorry this page does not exist</h3>
      <p>
        Please go back the
        <span>
          <Link to="/"> Home</Link>
        </span>
      </p>
    </div>
  );
};

export default Error404;
