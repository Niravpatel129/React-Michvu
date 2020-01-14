import React, { useRef, useEffect } from "react";
import "./HomePageTitle.scss";

function HomePageTitle() {
  const image = useRef(null);

  const handleScroll = e => {
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
              ref={image}
              src="https://i.imgur.com/jDR5lvL.png"
              alt="https://i.imgur.com/TNK3jgm.png"
            ></img>
          </div>
        </h1>
      </div>
      <h5>SCROLL FOR PROJECTS</h5>
    </section>
  );
}

export default HomePageTitle;
