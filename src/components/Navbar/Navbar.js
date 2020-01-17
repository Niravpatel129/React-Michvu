import React from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

import ScrollIntoView from "react-scroll-into-view";

function Navbar() {
  const location = useLocation();

  const handleNavigateToContact = e => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };

  return (
    <section className="Navbar" id="Navbar">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <h4>Michelle Vu</h4>
      </Link>
      <h2>TORONTO</h2>
      <h2>LAST UPDATED: 07/26/19</h2>
      <ScrollIntoView selector="#contact">
        <a
          href="/#contact"
          onClick={e => handleNavigateToContact(e)}
          style={{ textDecoration: "none" }}
        >
          <h2>CONTACT</h2>
        </a>
      </ScrollIntoView>
    </section>
  );
}

export default Navbar;
