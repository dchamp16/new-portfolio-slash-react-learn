import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <p>&copy; 2023 Your Company</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/main-content-router/About">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
