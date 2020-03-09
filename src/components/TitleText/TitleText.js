import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./TitleText.scss";

function TitleText({ tag1title, tag1titlep }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleText">
        <h3 className="type">{tag1title || "Title"}</h3>
        <p>
          {tag1titlep ||
            `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
        </p>
      </section>
    </ScrollAnimation>
  );
}

export default TitleText;
