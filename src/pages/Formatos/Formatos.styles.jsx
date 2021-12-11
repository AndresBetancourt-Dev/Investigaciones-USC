import styled from "styled-components";
import { Colors, Screen, Shadows } from "styles";

export const FormatosContainer = styled.section`
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (${Screen.tablet}) {
    width: 100%;
  }
`;

export const FormatoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 2em;
`;

export const FormatosSectionContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 1em;
`;

export const FormatosWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormatosSectionTitle = styled.h2`
  color: ${Colors.blue};
  font-size: 2.5vw;
  text-align: center;

  @media (${Screen.tabletXL}) {
    font-size: 1.75vw;
  }

  @media (${Screen.mobile}) {
    font-size: 5vw;
  }
`;

export const FormatoLink = styled.a`
  text-decoration: none;
  color: ${Colors.blue};
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: ${Shadows.light};
  padding: 1em;
`;

export const FormatoImage = styled.img`
  width: 10%;
  max-width: 2.5vw;
  max-height: 2.5vw;

  @media (${Screen.tablet}) {
    width: 5%;
    max-width: none;
    max-height: none;
  }

  @media (${Screen.mobile}) {
    width: 6.5%;
  }
`;

export const FormatoContent = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1em;
`;

export const FormatoTitle = styled.h3`
  margin: 0;
  font-size: 1vw;

  @media (${Screen.tabletXL}) {
    font-size: 1.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 2.75vw;
  }
`;

export const FormatoDescription = styled.article`
  color: ${Colors.gray};
  font-size: 0.75vw;

  @media (${Screen.tabletXL}) {
    font-size: 1.25vw;
  }

  @media (${Screen.mobile}) {
    font-size: 2.25vw;
  }
`;
