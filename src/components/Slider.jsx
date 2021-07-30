import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 500px) {
    height: ${(props) => props.mobileHeight};
  }
`;

SliderContainer.defaultProps = {
  elementHeight: "50vh",
  mobileHeight: "50vh",
};

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

const SlideText = styled.h2`
  position: absolute;
  color: white;
  z-index: 120;
  display: flex;
  font-size: 5vw;
  align-self: ${(props) => props.align};
  justify-self: ${(props) => props.justify};
`;

SlideText.defaultProps = {
  align: "center",
  justify: "center",
};

const SlideImage = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

/* Functional Component */

const Slider = ({ slides, height, mobileHeight }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  // const previousSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer elementHeight={height} mobileHeight={mobileHeight}>
      {slides.map((slide, index) => {
        return (
          <Slide className={index === current ? "active" : ""} key={index}>
            {index === current ? (
              <>
                <SlideImage src={slide.image} alt={slide.title} />
                <SlideText>{slide.title}</SlideText>
              </>
            ) : null}
          </Slide>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
