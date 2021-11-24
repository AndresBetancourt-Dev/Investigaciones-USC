import styled from "styled-components";
import ModalImage from "react-modal-image";
import { Colors, Screen, Shadows } from "styles";

export const UsContainer = styled.section`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "light" ? Colors.blue : Colors.white};
  box-shadow: ${Shadows.light};

  @media (${Screen.mobile}) {
    width: 100%;
  }
`;

export const UsSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${(props) => (props.inverted ? "row-reverse" : "row")};

  @media (${Screen.notepad}) {
    flex-wrap: wrap;
  }
`;

export const UsTitle = styled.h2`
  margin: 0;
  padding: 1em;

  text-align: center;
  background: ${(props) =>
    props.theme === "light" ? Colors.blue : Colors.white};
  color: ${(props) => (props.theme === "light" ? Colors.white : Colors.blue)};

  @media (min-width: 1050px) {
    font-size: 2.25vw;
  }

  @media (${Screen.tablet}) {
    text-align: left;
  }
`;

export const UsText = styled.span`
  width: 120%;
  padding: 2em;
  display: flex;

  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.theme === "light" ? Colors.blue : Colors.white};
  color: ${(props) => (props.theme === "light" ? Colors.white : Colors.blue)};
  text-align: justify;
  font-weight: 500;

  @media (${Screen.tablet}) {
    text-align: justify;
    width: 100%;
  }

  @media (min-width: 1050px) {
    font-size: 1.25vw;
    text-align: justify;
  }
`;

export const UsImage = styled(ModalImage)`
  width: 100%;
`;
