import React from "react";
import Image from "./Wolf.png";
import "./Introduction.scss";

function Introduction() {
  return (
    <section className="Introduction">
      <div className="titleBlock">
        <h1>StoryTale</h1>
        <img alt="etc" src={Image}></img>
      </div>
    </section>
  );
}

export default Introduction;
