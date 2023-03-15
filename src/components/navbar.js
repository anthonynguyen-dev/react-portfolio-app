import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <a onClick={() => setCurrentPage("Projects")}>Projects</a>
      <a onClick={() => setCurrentPage("About")}>About Me</a>
      <a onClick={() => setCurrentPage("Contact")}>Contact Me</a>
    </nav>
  );
}

export default Navbar;
