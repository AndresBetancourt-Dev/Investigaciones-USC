import styled from "styled-components";
import { Screen } from "styles";

export const OtriContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const OtriImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const OtriImage = styled.img`
  width: 100%;
  height: 87.5vh;
  object-fit: cover;
  @media (${Screen.mobile}) {
    height: 50vh;
  }
`;

export const OtriTitle = styled.h1`
  position: absolute;
  bottom: 2vh;
  left: 2vw;
  color: white;
  font-size: 5vw;
  @media (${Screen.tabletXL}) {
    font-size: 6.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 7.5vw;
  }
`;
