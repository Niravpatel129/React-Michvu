import React from "react";
import "./FullWidthImage.scss";

function FullWidthImage({ imageSrc }) {
  return (
    <div className="FullWidthImage">
      {" "}
      <div className="imageContainer">
        <img src={imageSrc || "https://i.imgur.com/ElAsoav.jpg"} alt="banner" />
      </div>
    </div>
  );
}

export default FullWidthImage;
