import React from "react";
import "./TitleImage.scss";
import image from "./pig-wolf1.png";
import ScrollAnimation from "react-animate-on-scroll";

function TitleImage({ title, src }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleImage">
        {title && <h3>{title}</h3>}
        <img alt={src || image} src={src || image}></img>
      </section>
    </ScrollAnimation>
  );
}

export default TitleImage;
