import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://linked.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <FaGithub />{" "}
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <FaTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
