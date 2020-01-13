import React from "react";
import "./TitleImage.scss";
import ScrollAnimation from "react-animate-on-scroll";
import ModalImage from "react-modal-image";

function TitleImage({ title, src, video }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleImage">
        {title && <h3>{title}</h3>}
        {video && (
          <video loop autoPlay>
            <source src="https://i.imgur.com/IadcLp5.mp4" type="video/mp4" />
          </video>
        )}
        {/* <img alt={src || image} src={src || image}></img> */}
        <ModalImage small={src} large={src} hideDownload hideZoom />
      </section>
    </ScrollAnimation>
  );
}

export default TitleImage;
