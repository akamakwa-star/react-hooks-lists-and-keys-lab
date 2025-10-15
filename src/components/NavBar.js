// src/components/NavBar.js
import React from "react";

const links = ["home", "about", "projects"];

function NavBar() {
  return (
    <nav>
      {links.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
