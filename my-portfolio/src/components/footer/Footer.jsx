import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
function Footer() {
  return (
    <footer>
      <a href="/" className="footer_logo">
        {/* Prashant */}
        {/* <img
          src={require("../../assets/logo.png")}
          alt="logo"
          style={{ width: "200px", height: "auto" }} */}
        {/* /> */}
        <p>Aayush Timalsina</p>
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>{/* <a href="#experience">Experiences</a> */}</li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
        <a href="http://instagram.com">
          <FiInstagram />
        </a>
        <a href="http://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>© Aayush's Portfolio. All rights reserved </small>
      </div>
    </footer>
  );
}
export default Footer;
