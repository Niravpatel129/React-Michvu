import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="Navbar" id="Navbar">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <h4>Michelle Vu</h4>
      </Link>
      <h2>TORONTO</h2>
      <h2>LAST UPDATED: 07/26/19</h2>
      <a href="/#contact" style={{ textDecoration: "none" }}>
        <h2>CONTACT</h2>
      </a>
    </section>
  );
}

export default Navbar;
