import React from "react";
import "./TitleImage.scss";
import ScrollAnimation from "react-animate-on-scroll";

function TitleImage({ title, src, video, size }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleImage">
        {title && <h3>{title}</h3>}
        <div className="video" style={{ width: size }}>
          {video && (
            <video loop muted autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
        <img alt={src} src={src}></img>
        {/* {src && <ModalImage small={src} large={src} hideDownload hideZoom />} */}
      </section>
    </ScrollAnimation>
  );
}

export default TitleImage;
