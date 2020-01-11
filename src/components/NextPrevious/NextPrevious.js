import React from "react";

import "./NextPrevious.scss";
import { Link } from "react-router-dom";

function NextPrevious({ next, prev }) {
  return (
    <section className="NextPrevious">
      <div className="Text">
        <Link to={next}>
          <h2>Next</h2>
        </Link>
        <Link to={prev}>
          <h2>Previous</h2>
        </Link>
      </div>
      <h5>Back to top</h5>
    </section>
  );
}

export default NextPrevious;
