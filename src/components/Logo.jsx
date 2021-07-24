import React from "react";
import USC_LOGO from "../assets/images/usc-white-logo.png";
import styled from "styled-components";

const ImageLogo = styled.img`
  width: 5vw;
  height: 5vw;
  z-index: 200;
  @media (max-width: 500px) {
    width: 2.5em;
    height: 2.5em;
  }
`;

const Logo = ({ logo, url, title }) => {
  return (
    <a
      href={url || "https://investigaciones.usc.edu.co/"}
      target="_blank"
      rel="noreferrer"
      style={{ zIndex: 200 }}
    >
      <ImageLogo
        rel="preload"
        src={logo || USC_LOGO}
        width={70}
        height={70}
        alt={title || "Logo de la Universidad Santiago de Cali"}
      ></ImageLogo>
    </a>
  );
};

export default Logo;
