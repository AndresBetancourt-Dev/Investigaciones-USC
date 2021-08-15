import styled from "styled-components";
import { Colors, Screen, Shadows } from "../styles";
import { proxy, useSnapshot } from "valtio";
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

  @media (${Screen.mobile}) {
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

  @media (${Screen.mobile}) {
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

  @media (${Screen.mobile}) {
    width: 100%;
  }
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

/* Functional Component */

const FooterMenuItem = ({ title, content }) => {
  return (
    <FooterMenuContainer>
      <FooterMenuTitle>{title}</FooterMenuTitle>
      {lineBreak(content, FooterMenuContent)}
    </FooterMenuContainer>
  );
};

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

/* Functional Component */

const Footer = () => {
  const sharedState = useSnapshot(FooterState);
  return (
    <FooterContainer visible={sharedState.visible}>
      <FooterContent>
        <FooterMenuContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          ratione, quod dolore qui aliquid, sint nobis ad vero at illo, fugit
          voluptate saepe aspernatur laborum adipisci dolor in porro dicta!
        </FooterMenuContent>
        <FooterMenuContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          ratione, quod dolore qui aliquid, sint nobis ad vero at illo, fugit
          voluptate saepe aspernatur laborum adipisci dolor in porro dicta!
        </FooterMenuContent>
        <FooterMenuContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          ratione, quod dolore qui aliquid, sint nobis ad vero at illo, fugit
          voluptate saepe aspernatur laborum adipisci dolor in porro dicta!
        </FooterMenuContent>
        <FooterMenuContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          ratione, quod dolore qui aliquid, sint nobis ad vero at illo, fugit
          voluptate saepe aspernatur laborum adipisci dolor in porro dicta!
        </FooterMenuContent>
      </FooterContent>
      <FooterMenu>
        {directions.map((direction) => (
          <FooterMenuItem
            key={direction.title}
            title={direction.title}
            content={direction.content}
          />
        ))}
      </FooterMenu>
    </FooterContainer>
  );
};

export default Footer;
