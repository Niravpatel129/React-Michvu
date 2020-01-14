import React from "react";
import "./TitleImage.scss";
import ScrollAnimation from "react-animate-on-scroll";

function TitleImage({ title, src, video }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleImage">
        {title && <h3>{title}</h3>}
        {video && (
          <video loop autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        )}
        <img alt={src} src={src}></img>
        {/* {src && <ModalImage small={src} large={src} hideDownload hideZoom />} */}
      </section>
    </ScrollAnimation>
  );
}

export default TitleImage;
