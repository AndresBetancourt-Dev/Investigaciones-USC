import USC_LOGO from "../assets/images/usc-white-logo.png";
import styled from "styled-components";
import { Screen } from "../styles";

/* Styled Components */

const ImageLogo = styled.img`
  width: 5vw;
  height: 5vw;
  z-index: 200;
  @media (${Screen.mobile}) {
    width: 2.5em;
    height: 2.5em;
  }
`;

/* Functional Component */

const Logo = ({ logo, url, title }) => {
  return (
    <a
      href={url || "https://investigaciones.usc.edu.co/"}
      target="_blank"
      rel="noreferrer noopener"
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
