import React from "react";
import "./TitleVideo.scss";
import ScrollAnimation from "react-animate-on-scroll";

function TitleVideo({ title, src1, src2, video }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="TitleVideo">
        {title && <h3>{title}</h3>}
        <div className="videos">
          <video loop muted>
            <source src={src1} type="video/mp4" />
          </video>
          <video loop muted>
            <source src={src2} type="video/mp4" />
          </video>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default TitleVideo;
