import React from "react";
import "./TitleImage.scss";
import image from "./pig-wolf1.png";

function TitleImage({ src }) {
  return (
    <section className="TitleImage">
      <h3>Title3</h3>
      <img alt={src || image} src={src || image}></img>
    </section>
  );
}

export default TitleImage;
