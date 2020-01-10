import React from "react";
import "./Image.scss";
import image from "./StoryTale-1.png";

function Image() {
  return (
    <section className="Image">
      <img alt="image" src={image}></img>
    </section>
  );
}

export default Image;
