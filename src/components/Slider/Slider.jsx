import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Screen } from "../../styles";
import Arrow from "./Arrow";
import Dots from "./Dots";

/* Styled Components */

const SliderContainer = styled.section`
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

const Slide = styled.div`
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

const SlideTitle = styled.h2`
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

const SlideImage = styled.img`
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

/* Functional Component */

const Slider = ({
  slides,
  height,
  mobileHeight,
  dots,
  arrows,
  dotActiveColor,
  sliderOverlay,
}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer
      elementHeight={height}
      mobileHeight={mobileHeight}
      sliderOverlay={sliderOverlay}
    >
      {slides.map((slide, index) => {
        return (
          <Slide className={index === current ? "active" : ""} key={index}>
            {index === current ? (
              <>
                <SlideImage src={slide.image} alt={slide.title} />
                <SlideTitle>{slide.title}</SlideTitle>
              </>
            ) : null}
          </Slide>
        );
      })}
      {arrows ? (
        <>
          <Arrow direction="left" handleClick={previousSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      ) : null}
      {dots ? (
        <Dots
          slides={slides.length}
          onClick={setCurrent}
          current={current}
          dotActiveColor={dotActiveColor}
        />
      ) : null}
    </SliderContainer>
  );
};

/* Default Props */

Slider.defaultProps = {
  dots: true,
  arrows: true,
};

export default Slider;
