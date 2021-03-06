import styled from "styled-components";
import { Colors, Screen, Shadows } from "styles";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.fixed ? props.background : Colors.blue};
  color: ${(props) => props.fontColor};
  position: ${(props) => (props.fixed ? "fixed" : "none")};
  display: flex;
  justify-content: space-between;
  padding: 1em;
  z-index: 150;
  transition: 0.3s ease-in;

  &.active {
    background: ${Colors.blue};
  }
`;

export const NavbarResponsiveMenu = styled.nav`
  display: flex;
  z-index: 100;
  position: absolute;
  top: ${(props) => (props.visible ? "0" : "-200vh")};
  right: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  width: 100%;
  height: 100vh;
  align-items: center;
  background: ${Colors.blue};
`;

export const MenuButton = styled.div`
  width: 5vw;
  height: 5vw;
  background: ${(props) => (props.visible ? Colors.blue : "white")};
  border-radius: 100%;
  z-index: 200;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease-in;
  box-shadow: ${(props) => (props.visible ? Shadows.light : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  & svg {
    font-size: 2.5vw;
    transition: 0.3s ease-in;
    color: ${Colors.blue};
  }

  &:focus {
    background: ${Colors.blue};
  }

  & svg.active {
    transform: rotate(180deg);
    color: white;
  }

  @media (${Screen.tabletXL}) {
    width: 7.5vw;
    height: 7.5vw;

    & svg {
      font-size: 5vw;
    }
  }

  @media (${Screen.mobile}) {
    width: 2.5em;
    height: 2.5em;
  }
`;

/* Default Props */

HeaderContainer.defaultProps = {
  background: "transparent",
  fontColor: "white",
};
