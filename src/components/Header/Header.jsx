import { useState, useContext } from "react";
import { ImMenu as Hamburger } from "react-icons/im";
import { LayoutContext } from "context/LayoutContext";
import Logo from "components/Logo";
import Navbar from "components/Navbar";
import {
  HeaderContainer,
  NavbarResponsiveMenu,
  MenuButton,
} from "./Header.styles";

const Header = () => {
  const { headerState, setHeaderState } = useContext(LayoutContext);
  const [navbarIsActive, setNavbarIsActive] = useState(false);

  const changeNavbarColor = () => setNavbarIsActive(window.scrollY >= 100);
  const changeVisibleMenu = () =>
    setHeaderState({ ...headerState, visible: !headerState.visible });

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <HeaderContainer
      className={navbarIsActive ? "active" : ""}
      fixed={headerState.fixed}
    >
      <Logo />
      {headerState.showMenu ? (
        <MenuButton onClick={changeVisibleMenu} visible={headerState.visible}>
          <Hamburger
            className={headerState.visible ? "active" : ""}
          ></Hamburger>
        </MenuButton>
      ) : null}
      <NavbarResponsiveMenu visible={headerState.visible}>
        <Navbar />
      </NavbarResponsiveMenu>
    </HeaderContainer>
  );
};

export default Header;
