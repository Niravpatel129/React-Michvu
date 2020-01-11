import React from "react";
import Image from "./Wolf.png";
import "./Introduction.scss";
import ScrollAnimation from "react-animate-on-scroll";

function Introduction({ title, src }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="Introduction">
        <div className="titleBlock">
          <h1> {title || "StoryTale"}</h1>
          <img alt="etc" src={src || Image}></img>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default Introduction;
