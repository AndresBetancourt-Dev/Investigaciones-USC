import { useContext } from "react";
import {
  FaFacebookSquare as Facebook,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { LayoutContext } from "context/LayoutContext";
import { lineBreak } from "utils";
import USC_LOGO from "assets/images/usc-owl-logo.png";

import {
  FooterContainer,
  FooterContent,
  FooterMenuContainer,
  FooterMenu,
  FooterMenuTitle,
  FooterMenuContent,
  FooterText,
  FooterLogo,
  FooterSocialNetworks,
} from "./Footer.styles";

const directions = [
  {
    title: "Ciudadela Pampalinda",
    content: `Calle 5 # 62-00 Barrio Pampalinda
    PBX: (+57 2) 518 3000
    Santiago de Cali, Valle del Cauca
    Colombia`,
  },
  {
    title: "Sede Centro",
    content: `Carrera 8 # 8-17 Barrio Santa Rosa
    PBX: (+57 2) 518 3000
    Santiago de Cali, Valle del Cauca
    Colombia`,
  },
  {
    title: "Seccional Palmira",
    content: `Carrera 30, Calle 38 Barrio Alfonso López
    PBX: (57 2) 518 3000 Ext. 528 - 2754933
    Palmira, Valle del Cauca
    Colombia`,
  },
];

const socialNetworks = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/publicaUSC",
    Icon: Facebook,
  },
  {
    title: "Twitter DGI",
    url: "https://twitter.com/DGI_USC",
    Icon: FaTwitter,
  },
  {
    title: "Twitter Editorial",
    url: "https://twitter.com/Editorial_USC",
    Icon: FaTwitterSquare,
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/channel/UCKbbFP9WUzLtyzWr4rJishw",
    Icon: FaYoutube,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/editorial_usc/",
    Icon: FaInstagram,
  },
];

const FooterSocial = () => {
  return (
    <FooterSocialNetworks>
      {socialNetworks.map(({ url, title, Icon }) => {
        return (
          <a
            href={url}
            target="_blank"
            title={title}
            rel="noreferrer noopener"
            key={title}
          >
            <Icon />
          </a>
        );
      })}
    </FooterSocialNetworks>
  );
};

const FooterMenuItem = ({ title, content = "", children }) => {
  return (
    <FooterMenuContainer>
      <FooterMenuTitle>{title}</FooterMenuTitle>
      {content !== "" ? lineBreak(content, FooterMenuContent) : null}
      {children}
    </FooterMenuContainer>
  );
};

const Footer = () => {
  const { footerState } = useContext(LayoutContext);
  return (
    <FooterContainer visible={footerState.visible}>
      <FooterContent>
        <FooterMenuContent>
          <FooterLogo
            src={USC_LOGO}
            alt="Logo de la Universidad Santiago de Cali"
          />
        </FooterMenuContent>
        <FooterMenuContent>
          <FooterMenuItem title={"Redes Sociales"}>
            <FooterSocial />
          </FooterMenuItem>
        </FooterMenuContent>
        <FooterMenuContent>
          {lineBreak(
            ` Institución de Educación superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
          Personería Jurídica ortorgada por el Ministerio de Justicia mediante la Resolución No. 2800 del 02 de Septiembre de 1958.
          Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional.`,
            FooterText
          )}
        </FooterMenuContent>
        <FooterMenuContent></FooterMenuContent>
      </FooterContent>
      <FooterMenu>
        {directions.map((direction) => (
          <FooterMenuItem
            key={direction.title}
            title={direction.title}
            content={direction.content}
            type="text"
          />
        ))}
      </FooterMenu>
    </FooterContainer>
  );
};

export default Footer;
