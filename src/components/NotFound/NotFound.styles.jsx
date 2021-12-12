import styled from "styled-components";
import { Colors, Screen } from "styles";

export const NotFoundContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  background: white;
`;

export const NotFoundContent = styled.section`
  width: 80%;
  height: auto;
  background: white;
  padding-bottom: 2.5em;
  ${(props) => (props.type === "fragment" ? "height : 50vh;" : null)}
  display : flex;
  align-items: center;
  justify-content: center;

  @media (${Screen.tablet}) {
    flex-direction: column;
  }
`;

export const NotFoundImage = styled.img`
  width: 50%;
`;

export const NotFoundTitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NotFoundTitle = styled.h3`
  color: ${Colors.blue};
  text-align: center;
  font-size: 2.5vw;
`;
