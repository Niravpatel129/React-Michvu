import React from "react";
import "./TitleImage.scss";
import image from "./pig-wolf1.png";

function TitleImage() {
  return (
    <section className="TitleImage">
      <h3>Title3</h3>
      <img alt={image} src={image}></img>
    </section>
  );
}

export default TitleImage;
