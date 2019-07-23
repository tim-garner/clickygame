import React from "react";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
          <li class="brand">
              <a href="/">Clicky Game</a>
          </li>
          <li class>Click an Image to begin</li>
          <li>
              "Score: "
              "0" | Top Score: "
              "0"
          </li>
      </ul>
      </nav>
  );
}

export default Navbar;