import styled from "styled-components";
import { Colors, Screen } from "styles";

export const RedesContainer = styled.section`
  width: 75%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.1em;
`;

export const RedContainer = styled.div`
  width: 25%;
  height: 100%;
  margin: 0 2em;
`;

export const RedLink = styled.a`
  text-decoration: none;
  color: ${Colors.blue};
`;

export const RedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RedTitle = styled.h2`
  text-align: center;
  font-size: 1.25vw;

  @media (${Screen.tabletXL}) {
    font-size: 1.75vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.25vw;
  }
`;
