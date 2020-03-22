import React, { useRef, useEffect, useState } from "react";
import "./HomePageTitle.scss";

function HomePageTitle({ src, src2 }) {
  const image = useRef(null);
  const [source, changeSource] = useState(src);

  const handleMouseClick = () => {
    if (source !== src2) {
      changeSource(src2);
    } else {
      changeSource(src);
    }
  };

  const handleScroll = (e) => {
    let scroll = window.pageYOffset;
    image.current.style.transform = "rotate(" + scroll + "deg";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="HomePageTitle">
      <div className="title">
        <h1>
          &nbsp;19. - 20. <br />
          Portfolio
          <div className="image-cropper">
            <img
              onMouseDown={handleMouseClick}
              ref={image}
              src={source}
              alt={source}
            ></img>
          </div>
        </h1>
      </div>
      <h5>SCROLL FOR PROJECTS</h5>
    </section>
  );
}

export default HomePageTitle;
