import USC_LOGO from "assets/images/usc-white-logo.png";
import { ImageLogo } from "./Logo.styles";

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
