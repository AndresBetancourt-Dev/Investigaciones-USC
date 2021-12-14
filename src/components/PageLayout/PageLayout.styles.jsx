import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Colors, Screen } from "styles";

export const PageLayoutContainer = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 1em;
`;

export const PageLayoutHeader = styled.section`
  width: 100%;
  height: ${(props) => props.elementHeight};
  background: ${(props) => {
    switch (props.type) {
      case "image":
        return `url('${props.background}');
  background-size : cover;
  background-repeat : no-repeat;
  background-position: center;
  height : 30vh;
  `;
      case "color":
      default:
        return `${Colors.blue}`;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  position: relative;

  @media (${Screen.mobile}) {
    flex-wrap: wrap;
    height: 12.5vh;
  }

  @media (${Screen.mobileHorizontal}) {
    height: auto;
  }
`;

export const PageLayoutTitle = styled.h1`
  text-align: center;
  width: 50%;
  font-size: 5vw;
  color: ${(props) => props.textColor};
  @media (${Screen.mobile}) {
    width: 100%;
    font-size: 6vw;
  }
`;

export const PageLayoutNavigation = styled.div`
  position: relative;
  padding-top: 1em;
  padding-left: 2vw;
  display: flex;
  padding-bottom: 0.5em;
`;

export const ArrowExit = styled(FaArrowAltCircleLeft)`
  width: 2.5vw;
  height: 2.5vw;
  cursor: pointer;
  transition: 0.3s ease-in;

  @media (${Screen.tablet}) {
    width: 3.5vw;
    height: 3.5vw;
  }

  @media (${Screen.mobile}) {
    width: 5vw;
    height: 5vw;
  }
`;

PageLayoutHeader.defaultProps = {
  elementHeight: "17.5vh",
};

PageLayoutTitle.defaultProps = {
  textColor: "white",
};
