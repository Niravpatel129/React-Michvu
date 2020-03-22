import React from "react";
import "./ProjectHeader.scss";

function ProjectHeader({
  title,
  src,
  tag1title,
  tag1sub,
  tag2sub,
  tag3sub,
  tag4sub
}) {
  return (
    <div className="ProjectHeader">
      <div className="titleBlock">
        <h1> {title || "StoryTale"}</h1>
        <div className="imageContainer">
          <img alt="etc" src={src || "https://i.imgur.com/qbEUrTp.png"}></img>
        </div>
      </div>
      <div className="types">
        <div>
          <h3 className="type">{tag1title || "Lorem ipsum"}</h3>
          <p>
            {tag1sub ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </p>
        </div>
        <div>
          <h3 className="type">{tag1title || "Lorem ipsum"}</h3>
          <p>
            {tag2sub ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </p>{" "}
        </div>
        <div>
          <h3 className="type">{tag1title || "Lorem ipsum"}</h3>
          <p>
            {tag3sub ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </p>{" "}
        </div>
        <div>
          <h3 className="type">{tag1title || "Lorem ipsum"}</h3>
          <p>
            {tag4sub ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
