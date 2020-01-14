import React from "react";

import "./NextPrevious.scss";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function NextPrevious({ next, prev }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="NextPrevious">
        <div className="Text">
          <Link to={prev}>
            <h2>Previous</h2>
          </Link>
          <Link to={next}>
            <h2>Next</h2>
          </Link>
        </div>
        <a href="#Navbar">
          <h5>Back to top</h5>
        </a>
      </section>{" "}
    </ScrollAnimation>
  );
}

export default NextPrevious;
