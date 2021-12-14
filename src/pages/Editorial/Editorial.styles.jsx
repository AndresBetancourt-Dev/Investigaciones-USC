import styled from "styled-components";
import { Colors, Screen } from "styles";

export const EditorialContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const EditorialHero = styled.img`
  width: 100%;
  height: 87.5vh;
  object-fit: cover;
  @media (${Screen.mobile}) {
    height: 50vh;
  }
`;

export const EditorialSection = styled.section`
  width: ${(props) => props.elementWidth};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.elementBackground};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: ${(props) => props.elementWrap};

  @media (max-width: 500px) {
    flex-wrap: ${(props) => props.mobileWrap};
  }
`;

export const EditorialTitle = styled.h2`
  color: ${(props) => props.fontColor};
  text-align: center;
`;

export const EditorialText = styled.p`
  color: ${(props) => props.fontColor};
`;

export const EditorialImage = styled.img`
  width: 30%;
  height: 30%;
`;

/* Default Props */

EditorialSection.defaultProps = {
  elementWidth: "100%",
  elementHeight: "100%",
  elementWrap: "wrap",
  elementBackground: "white",
  mobileWrap: "wrap",
  padding: "1em",
};

EditorialTitle.defaultProps = {
  fontColor: Colors.blue,
};

EditorialTitle.defaultProps = {
  fontColor: Colors.blue,
};

/* Functional Components */
