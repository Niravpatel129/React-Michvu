import React from "react";
import "./Image.scss";
import image from "./StoryTale-1.png";

function Image({ src }) {
  return (
    <section className="Image">
      <img alt={src || image} src={src || image}></img>
    </section>
  );
}

export default Image;
