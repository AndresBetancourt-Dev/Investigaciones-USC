import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import Dots from "./Dots";
import {
  SliderContainer,
  Slide,
  SlideImage,
  SlideTitle,
} from "./Slider.styles";

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

Slider.defaultProps = {
  dots: true,
  arrows: true,
};

export default Slider;
