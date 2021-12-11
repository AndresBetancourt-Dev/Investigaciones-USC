import { DotsContainer, Dot } from "./Dots.styles";

const Dots = ({ slides, onClick, current, dotActiveColor }) => {
  return (
    <DotsContainer>
      {[...Array(slides)].map((dot, index) => (
        <Dot
          key={index}
          title={dot}
          onClick={() => onClick(index)}
          className={current === index ? "active" : ""}
          dotActiveColor={dotActiveColor}
        />
      ))}
    </DotsContainer>
  );
};

export default Dots;
