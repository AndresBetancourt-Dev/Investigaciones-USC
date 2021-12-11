import styled from "styled-components";
import { Screen } from "styles";

export const SliderContainer = styled.section`
  width: 100%;
  height: ${(props) => props.elementHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: auto;
    z-index: 5;
    background: ${(props) => props.sliderOverlay};
  }

  @media (${Screen.mobile}) {
    height: ${(props) => props.mobileHeight};
  }
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  display: grid;
  opacity: 0;
  transition: 0.5s ease-in;

  &.active {
    opacity: 1;
    transition: 0.5s ease-in;
  }
`;

export const SlideTitle = styled.h2`
  position: absolute;
  color: white;
  z-index: 120;
  display: flex;
  font-size: 5vw;
  align-self: ${(props) => props.align};
  justify-self: ${(props) => props.justify};

  @media (${Screen.tabletXL}) {
    font-size: 4vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4.5vw;
  }
`;

export const SlideImage = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

/* Default Props */

SliderContainer.defaultProps = {
  elementHeight: "50vh",
  mobileHeight: "50vh",
  sliderOverlay: "rgba(0, 0, 0, 0.5)",
};

SlideTitle.defaultProps = {
  align: "center",
  justify: "center",
};
