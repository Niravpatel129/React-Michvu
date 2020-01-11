import React from "react";
import "./Image.scss";
import image from "./StoryTale-1.png";
import ScrollAnimation from "react-animate-on-scroll";

function Image({ src }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="Image">
        <img alt={src || image} src={src || image}></img>
      </section>
    </ScrollAnimation>
  );
}

export default Image;
