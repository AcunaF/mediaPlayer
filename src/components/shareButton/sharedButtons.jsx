import React from "react";
import { FaFacebookF, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./shared.scss";

const ShareButtons = () => (
  <div className="share-buttons">
    <a
      href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF size={32} />
    </a>
    <a
      href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Check%20this%20out!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitterSquare size={32} />
    </a>
    <a
      href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={32} />
    </a>
    <a
      href="https://www.instagram.com/yourwebsite"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram size={32} />
    </a>
  </div>
);
export default ShareButtons;
