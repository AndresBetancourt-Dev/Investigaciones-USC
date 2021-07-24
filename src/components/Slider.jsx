import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 100vh;
  position: relative;
`;

const Slide = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative
  inset: auto;
  opacity : 0;
  transition: 0.5s ease-in;

  &.active {
    opacity : 1;
    transition: 0.5s ease-in;
  }

  &::before {
      content : '';
      position : absolute;
      width : 100%;
      height : 100%;
      inset : auto;
      z-index : 5;
      background : rgba(0,0,0,.375);
  }
`;

const SlideImage = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const Slider = ({ slides }) => {
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
    <SliderContainer>
      {slides.map((slide, index) => {
        return (
          <Slide className={index === current ? "active" : ""} key={index}>
            {index === current ? (
              <SlideImage src={slide.image} alt={slide.title} />
            ) : null}
          </Slide>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
