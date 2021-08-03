import styled from "styled-components";
import { Colors } from "../../styles";

/* Styled Components */

const DotsContainer = styled.div`
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

const Dot = styled.div`
  width: 1vw;
  height: 1vw;
  margin: 1vw;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in;

  @media (max-width: 750px) {
    width: 2vw;
    height: 2vw;
  }

  &.active {
    background: ${(props) => props.dotActiveColor};
  }
`;

/* Default Props */

Dot.defaultProps = {
  dotActiveColor: Colors.blue,
};

/* Functional Component */

const Dots = ({ slides, onClick, current, dotActiveColor }) => {
  return (
    <DotsContainer>
      {[...Array(slides)].map((dot, index) => (
        <Dot
          key={index}
          onClick={(e) => onClick(index)}
          className={current === index ? "active" : ""}
          dotActiveColor={dotActiveColor}
        />
      ))}
    </DotsContainer>
  );
};

export default Dots;
