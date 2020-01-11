import React from "react";
import Image from "./Wolf.png";
import "./Introduction.scss";

function Introduction({ title, src }) {
  return (
    <section className="Introduction">
      <div className="titleBlock">
        <h1> {title || "StoryTale"}</h1>
        <img alt="etc" src={src || Image}></img>
      </div>
    </section>
  );
}

export default Introduction;
