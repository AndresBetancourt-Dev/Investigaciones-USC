import styled from "styled-components";
import { Screen } from "styles";

export const ImageLogo = styled.img`
  width: 5vw;
  height: 5vw;
  z-index: 200;
  @media (${Screen.mobile}) {
    width: 2.5em;
    height: 2.5em;
  }
`;
