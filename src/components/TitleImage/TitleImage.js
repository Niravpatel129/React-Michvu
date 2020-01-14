import React from "react";
import "./TitleImage.scss";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobile } from "react-device-detect";

function TitleImage({ title, src, video, size }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleImage">
        {title && <h3>{title}</h3>}
        <div className="video" style={{ width: size }}>
          {video && (
            <video loop autoPlay={!isMobile}>
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
