import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./sNetwork.scss";

const SocialMediaIcons = {
  gmail: SiGmail,
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

const SocialMediaCard = ({
  name,
  url,
  platform,
  description,
  followers,
  title,
}) => {
  const Icon = SocialMediaIcons[platform];

  return (
    <div className="container-redes">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-card"
      >
        <div className="icon-container">
          <Icon size={102} />
        </div>
        <div className="details">
          <h4>{name}</h4>
          {description && <p className="description">{description}</p>}
          {followers && <p className="followers">{followers} seguidores</p>}
        </div>
      </a>
    </div>
  );
};

export default SocialMediaCard;
