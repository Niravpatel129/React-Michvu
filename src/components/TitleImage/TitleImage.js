import React from "react";
import "./TitleImage.scss";
import ScrollAnimation from "react-animate-on-scroll";
import ModalImage from "react-modal-image";

function TitleImage({ title, src }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleImage">
        {title && <h3>{title}</h3>}
        {/* <img alt={src || image} src={src || image}></img> */}
        <ModalImage small={src} large={src} />
      </section>
    </ScrollAnimation>
  );
}

export default TitleImage;
