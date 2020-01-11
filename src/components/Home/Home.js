import React, { Component } from "react";
import homeImage from "./Header-Image.png";
import Logo from "./Logo.svg";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home" ref={this.component}>
        <img className="HomeImage" src={homeImage} alt={homeImage}></img>

        <h1>INTER-ACTION & VISUAL DESIGN-ER</h1>
        <img className="logo" src={Logo} alt={Logo}></img>
      </div>
    );
  }
}

export default Home;
