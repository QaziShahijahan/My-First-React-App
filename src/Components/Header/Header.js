import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav>
        <h1>My App</h1>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
