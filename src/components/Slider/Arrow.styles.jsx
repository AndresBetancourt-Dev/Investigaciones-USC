import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { Screen } from "styles";

export const ArrowIcon = styled(IoMdArrowDropdown)`
  position: absolute;
  top: auto;
  bottom: auto;
  ${(props) => props.direction} : 1vw;
  transform: ${(props) =>
    props.direction === "left" ? "rotate(90deg)" : "rotate(-90deg)"};
  width: 3vw;
  height: 3vw;
  cursor: pointer;
  z-index: 125;

  @media (${Screen.laptopXL}) {
    width: 4.5vw;
    height: 4.5vw;
  }

  @media (${Screen.tabletXL}) {
    width: 6.5vw;
    height: 6.5vw;
  }
`;
