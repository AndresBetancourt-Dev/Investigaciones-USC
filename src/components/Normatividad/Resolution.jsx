import styled from "styled-components";
import { Colors, Screen, Shadows } from "../../styles";

/* Styled Components */

const ResolutionContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  box-shadow: ${Shadows.light};
  border-radius: 10px;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.015, 1.015);
  }
`;

const ResolutionCircle = styled.div`
  border-radius: 50%;
  background: linear-gradient(to top, ${Colors.gold}, ${Colors.goldYellow});
  display: flex;
  width: 2vw;
  height: 2vw;
  box-shadow: 0.1vw 0.1vw 60px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: -1vw;
  align-items: center;
  justify-content: center;

  &:after {
    width: 75%;
    height: 75%;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: white;
  }

  @media (${Screen.mobile}) {
    width: 6vw;
    height: 6vw;
    left: -3vw;
  }
`;

const ResolutionTitle = styled.h3`
  color: ${Colors.blue};
  margin: 0;
  padding: 0;
  font-size: 1.5vw;

  @media (${Screen.tablet}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

/* Functional Component */

const Resolution = ({ title, description }) => {
  return (
    <ResolutionContainer>
      <ResolutionCircle />
      <ResolutionTitle>{title}</ResolutionTitle>
      <p>{description}</p>
    </ResolutionContainer>
  );
};

export default Resolution;
