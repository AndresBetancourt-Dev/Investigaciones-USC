import styled from "styled-components";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { proxy, useSnapshot } from "valtio";

import USC_LOGO from "../assets/images/usc-owl-logo.png";
import { Colors, Screen, Shadows } from "../styles";
import { lineBreak } from "../utils";

/* Global Shared State */

export const FooterState = proxy({
  visible: true,
});

/* Styled Components */

const FooterContainer = styled.footer`
  width: ${(props) => props.elementWidth};
  height: ${(props) => props.elementHeight};
  background: ${(props) => props.elementBackground};
  display: ${(props) => (!props.visible ? "none;" : "flex")};
  padding: 2em;
  gap: 2em;
  color: white;
  justify-content: center;

  @media (${Screen.tablet}) {
    flex-direction: column;
  }
`;

const FooterContent = styled.section`
  width: 67%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: ${Shadows.light};

  & * {
    width: 50%;
    height: 50%;
    padding: 1em;
  }

  @media (${Screen.tablet}) {
    width: 100%;
    & * {
      width: 100%;
      height: auto;
    }
  }
`;

const FooterMenu = styled.nav`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  box-shadow: ${Shadows.light};

  @media (${Screen.tablet}) {
    width: 100%;
  }
`;

const FooterText = styled.div`
  width: 100%;
  padding: 0;
  text-align: center;
`;

const FooterMenuContainer = styled.div`
  padding: 0.5em 1em;
`;

const FooterMenuTitle = styled.h2`
  text-align: center;
  font-size: 2vw;

  @media (${Screen.laptop}) {
    font-size: 2.5vw;
  }

  @media (${Screen.tablet}) {
    font-size: 3vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4.5vw;
  }
`;

const FooterMenuContent = styled.div`
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1em;

  @media (${Screen.laptop}) {
    font-size: 1.5vw;
  }

  @media (${Screen.tablet}) {
    font-size: 2.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

const FooterSocialNetworks = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  gap: 2.5px;

  & svg {
    color: white;
    width: 100%;
    height: 100%;
    padding: 0;
    width: 2.5vw;
    height: 2.5vw;
  }

  @media (${Screen.tablet}) {
    & svg {
      width: 5vw;
      height: 5vw;
    }
  }
`;

const FooterLogo = styled.img`
  width: 20vw;
  height: 15vw;

  @media (${Screen.tablet}) {
    width: 30vw;
    height: 25vw;
  }
`;

/* Default Props */

FooterContainer.defaultProps = {
  elementWidth: "100%",
  elementHeight: "auto",
  elementBackground: Colors.blue,
};

/* Constant Data */

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
    url: "",
    Icon: Facebook,
  },
  {
    title: "Facebook",
    url: "",
    Icon: Facebook,
  },
  {
    title: "Facebook",
    url: "",
    Icon: Facebook,
  },
  {
    title: "Facebook",
    url: "",
    Icon: Facebook,
  },
  {
    title: "Facebook",
    url: "",
    Icon: Facebook,
  },
];

/* Functional Component */

const FooterSocial = () => {
  return (
    <FooterSocialNetworks>
      {socialNetworks.map(({ url, title, Icon }) => {
        return (
          <a href={url} target="_blank" title={title} rel="noreferrer">
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
  const sharedState = useSnapshot(FooterState);
  return (
    <FooterContainer visible={sharedState.visible}>
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
