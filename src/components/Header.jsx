import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <h1>YOUR FULLNAME</h1>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#portfolio" class="nav-link">
              PORTFOLIO
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
