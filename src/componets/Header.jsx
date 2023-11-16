import React from "react";

const Header = () => {
  const navTitles = ["Home", "Porfolio", "About", "Contact"];
  return (
    <Header>
      <ul>
        {navTitles.map((value, index) => {
          return (
            <a key={index} className="nav-link">
              {value}
            </a>
          );
        })}
      </ul>
    </Header>
  );
};

export default Header;
