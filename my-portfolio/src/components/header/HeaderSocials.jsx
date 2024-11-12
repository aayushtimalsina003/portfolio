import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://linked.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        {" "}
        <FaGithub />{" "}
      </a>
      <a href="https://twitter.com" target="_blank">
        {" "}
        <FaTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
