import styled from "styled-components";
import { Shadows } from "../styles";

/* Styled Components */

export const Card = styled.div`
  background: ${(props) => props.elementBackground};
  padding: ${(props) => props.padding};
  width: ${(props) => props.elementWidth};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  height: ${(props) => props.elementHeight};
  font-size: 1vw;
  font-weight: ${(props) => props.elementFontWeight};
  box-shadow: ${(props) => Shadows[props.boxShadow]};
  border-radius: ${(props) => (props.rounded ? "10px" : "2.5px")};
  gap: ${(props) => props.gap};

  ${(props) =>
    props.hovereable
      ? `transition: 0.3s ease;
   &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: ${Shadows.light};
  }
  `
      : null}

  @media (max-width: 1050px) {
    font-size: 1.5vw;
  }

  @media (max-width: 650px) {
    font-size: 2vw;
  }

  @media (max-width: 500px) {
    font-size: 3.5vw;
    width: ${(props) => props.mobileWidth};
    height: ${(props) => props.mobileHeight};
    max-height: ${(props) => props.mobileMaxHeight};
    overflow: hidden;
  }
`;

export const CardImageTop = styled.img`
  width: ${(props) => props.elementWidth};
  height: ${(props) => props.elementHeight};
  border-radius: ${(props) => (props.rounded ? "10px" : "2.5px")};
  object-fit: cover;
`;

/* Default Props */

Card.defaultProps = {
  padding: "1.5em",
  margin: "1em 0px",
  elementWidth: "100%",
  elementHeight: "auto",
  mobileWidth: "100%",
  mobileHeight: "auto",
  mobileMaxHeight: "auto",
  boxShadow: "normal",
  elementBackground: "white",
  rounded: false,
  elementFontWeight: "300",
  textAlign: "justify",
  hovereable: false,
};

CardImageTop.defaultProps = {
  elementWidth: "100%",
  elementHeight: "80%",
  rounded: false,
};
