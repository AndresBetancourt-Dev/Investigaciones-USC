import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Colors } from "../styles/Colors";
import { proxy, useSnapshot } from "valtio";

/* Global Shared State */

export const HeaderState = proxy({
  fixed: true,
  showMenu: true,
});

/* Styled Components */

const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.fixed ? props.background : Colors.blue};
  color: ${(props) => props.color};
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  display: flex;
  justify-content: space-between;
  padding: 1em;
  z-index: 150;
  transition: 0.3s ease-in;

  &.active {
    background: ${Colors.blue};
  }
`;

const NavbarResponsiveMenu = styled.section`
  display: flex;
  z-index: 100;
  position: absolute;
  top: ${(props) => (props.visible ? "0" : "-100vh")};
  right: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  width: 100%;
  height: 100vh;
  background: ${Colors.blue};
`;

const MenuButton = styled.div`
  width: 5vw;
  height: 5vw;
  background: white;
  border-radius: 100%;
  z-index: 200;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 2.5em;
    height: 2.5em;
  }
`;

/* Default Props */

HeaderContainer.defaultProps = {
  background: "transparent",
  color: "white",
};

/* Functional Component */

const Header = () => {
  const [navbarIsActive, setNavbarIsActive] = useState(false);
  const [visibleMenu, setVisibileMenu] = useState(false);

  const changeNavbarColor = () => setNavbarIsActive(window.scrollY >= 150);
  const changeVisibleMenu = () => setVisibileMenu(!visibleMenu);

  window.addEventListener("scroll", changeNavbarColor);

  const sharedState = useSnapshot(HeaderState);

  return (
    <HeaderContainer
      className={navbarIsActive ? "active" : ""}
      fixed={sharedState.fixed}
    >
      <Logo />
      {sharedState.showMenu ? <MenuButton onClick={changeVisibleMenu} /> : null}
      <NavbarResponsiveMenu visible={visibleMenu} />
    </HeaderContainer>
  );
};

export default Header;
