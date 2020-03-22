import React from "react";
import "./KeylineSubheader.scss";

function KeylineSubheader({ title }) {
  return (
    <div className="KeylineSubheader"> {<h3>{title || "PlaceHolder"}</h3>}</div>
  );
}

export default KeylineSubheader;
