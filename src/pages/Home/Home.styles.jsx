import styled from "styled-components";
import { Colors } from "../../styles";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
`;

export const HomeSection = styled.section`
  width: ${(props) => props.elementWidth};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: ${(props) => props.elementWrap};

  @media (max-width: 500px) {
    flex-wrap: ${(props) => props.mobileWrap};
  }
`;

export const HomeDetailedText = styled.span`
  color: ${Colors.blue};
  font-weight: 500;
`;

HomeSection.defaultProps = {
  elementWidth: "100%",
  elementHeight: "100%",
  elementWrap: "wrap",
  mobileWrap: "wrap",
  padding: "1em",
};
