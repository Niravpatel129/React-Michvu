import React from "react";
import "./FitWidthImage.scss";

function FitWidthImage({ imageSrc }) {
  return (
    <div className="FitWidthImage">
      <div className="imageContainer">
        <img src={imageSrc || "https://i.imgur.com/ElAsoav.jpg"} alt="banner" />
      </div>
    </div>
  );
}

export default FitWidthImage;
