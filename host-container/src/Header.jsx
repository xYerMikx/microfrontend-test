import React from "react";

const Header = () => {
  return (
    <header>
      <ul style={{ listStyle: "none" }}>
        <li>
          <a style={{ textDecoration: "none", color: "blue" }} href="">
            Home
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "blue" }} href="">
            About
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "blue" }} href="">
            Somepage
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "blue" }} href="">
            Contacts
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
