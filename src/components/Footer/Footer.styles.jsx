import styled from "styled-components";
import { Colors, Screen, Shadows } from "styles";

export const FooterContainer = styled.footer`
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

export const FooterContent = styled.section`
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

export const FooterMenu = styled.nav`
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

export const FooterText = styled.div`
  width: 100%;
  padding: 0;
  text-align: center;
`;

export const FooterMenuContainer = styled.div`
  padding: 0.5em 1em;
`;

export const FooterMenuTitle = styled.p`
  text-align: center;
  font-size: 2vw;
  margin: 0;
  font-weight: bold;
  margin-bottom: 2.5vh;

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

export const FooterMenuContent = styled.div`
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

export const FooterSocialNetworks = styled.div`
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

export const FooterLogo = styled.img`
  width: 25vw;
  height: 20vw;

  @media (${Screen.tablet}) {
    width: 100%;
    height: 100%;
  }
`;

FooterContainer.defaultProps = {
  elementWidth: "100%",
  elementHeight: "auto",
  elementBackground: Colors.blue,
};
