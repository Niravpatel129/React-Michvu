import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="Navbar" id="Navbar">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <h7>Michelle Vu</h7>
      </Link>
      <h8>TORONTO</h8>
      <h8>LAST UPDATED: 07/26/19</h8>
      <h8>CONTACT</h8>
    </section>
  );
}

export default Navbar;
