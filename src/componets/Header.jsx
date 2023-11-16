// import React from "react";

const Header = () => {
  const navTitles = ["Home", "Porfolio", "About", "Contact"];
  return (
    <header>
      <ul>
        {navTitles.map((value, index) => {
          return (
            <a key={index} className="nav-link">
              {value}
            </a>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
