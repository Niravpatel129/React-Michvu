import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import image1 from "./Thumbnail-1.jpg";

import "./HomePageItem.scss";
import { Link } from "react-router-dom";

function HomePageItem({ src, tag1, tag2, tag3, title, para, btnSrc, link }) {
  return (
    <React.Fragment>
      <ScrollAnimation animateIn="fadeIn">
        <div className="HomePageItem">
          <img className="imageBlock" src={src} alt={image1} />
          <div className="ContentBlock">
            <div className="content">
              <div className="captions">
                <h4>{tag1 || "AUGMENTED REALITY"}</h4>
                <h4>{tag2 || "AUGMENTED REALITY"}</h4>
                <h4>{tag3 || "AUGMENTED REALITY"}</h4>
              </div>
              <h2>{title || "StoryTale Storytelling"}</h2>
              <p>
                {para ||
                  `An interactive and accessible AR experience that actually
                deepens our engagement with stories.`}
              </p>
            </div>
            {!link ? (
              <img
                alt="btn"
                className="view"
                src={btnSrc || "https://i.imgur.com/DaBZTjf.png"}
              ></img>
            ) : (
              <Link to={link || ""}>
                <img
                  alt="btn"
                  className="view"
                  src={btnSrc || "https://i.imgur.com/DaBZTjf.png"}
                ></img>
              </Link>
            )}
          </div>
        </div>
      </ScrollAnimation>
    </React.Fragment>
  );
}

export default HomePageItem;
