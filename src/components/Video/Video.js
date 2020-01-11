import React from "react";
import "./Video.scss";
import ScrollAnimation from "react-animate-on-scroll";

function Video({ src }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="Video">
        <iframe
          title="Video"
          src={src || "https://player.vimeo.com/video/355413664"}
          width="640"
          height="480"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </section>
    </ScrollAnimation>
  );
}

export default Video;
