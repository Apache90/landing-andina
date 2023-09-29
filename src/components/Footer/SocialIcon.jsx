import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcon = () => {
  const icons = [
    { name: "FaFacebook", icon: <FaFacebook /> },
    { name: "FaTwitter", icon: <FaTwitter /> },
    { name: "FaGithub", icon: <FaGithub /> },
    { name: "FaLinkedin", icon: <FaLinkedin /> },
    { name: "FaInstagram", icon: <FaInstagram /> },
  ];

  return (
    <div className="text-white">
      {icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-orange-500 mx-1.5 text-xl hover:bg-borraDeVino
            duration-300 "
        >
          {icon.icon}
        </span>
      ))}
    </div>
  );
};

export default SocialIcon;
