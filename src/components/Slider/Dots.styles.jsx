import styled from "styled-components";
import { Colors, Screen } from "styles";

export const DotsContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 2.5vh;
  z-index: 125;
  left: 0;
  right: 0;
`;

export const Dot = styled.div`
  width: 1vw;
  height: 1vw;
  margin: 1vw;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in;

  @media (${Screen.tabletXL}) {
    width: 2vw;
    height: 2vw;
  }

  &.active {
    background: ${(props) => props.dotActiveColor};
  }
`;

Dot.defaultProps = {
  dotActiveColor: Colors.blue,
};
