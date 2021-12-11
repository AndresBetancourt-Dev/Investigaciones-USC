import { ArrowIcon } from "./Arrow.styles";

const Arrow = ({ direction, handleClick, arrowColor }) => {
  return (
    <ArrowIcon
      direction={direction}
      onClick={() => handleClick()}
      color={arrowColor || "white"}
    />
  );
};

export default Arrow;
