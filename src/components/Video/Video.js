import React from "react";
import "./Video.scss";

function Video({ src }) {
  return (
    <section className="Video">
      <iframe
        title="Video"
        src={src || "https://player.vimeo.com/video/355413664"}
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default Video;
