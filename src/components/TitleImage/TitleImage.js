import React from "react";
import "./TitleImage.scss";
import image from "./pig-wolf1.png";

function TitleImage({ title, src }) {
  return (
    <section className="TitleImage">
      {title && <h3>{title}</h3>}
      <img alt={src || image} src={src || image}></img>
    </section>
  );
}

export default TitleImage;
