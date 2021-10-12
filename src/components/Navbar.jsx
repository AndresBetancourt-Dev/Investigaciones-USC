import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Screen } from "../styles";

/* Styled Components */

const NavbarList = styled.ul`
  list-style: none;
`;

const NavbarItem = styled.li``;

const commonLinkStyles = css`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 4vw;
  margin: 0;
  padding: 0;
  letter-spacing: -2.5px;

  @media (${Screen.tablet}) {
    font-size: 7.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 10vw;
  }
`;

const NavbarLink = styled(Link)`
  ${commonLinkStyles}
`;

const NavbarButton = styled.button`
  ${commonLinkStyles}
  background : transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "GT Walsheim Pro";
`;

/* Functional Component */

const Navbar = () => {
  const pages = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Solicitudes",
      url: "/solicitudes",
    },
    // {
    //   title: "Convocatorias",
    //   url: "/convocatorias",
    //   child: [],
    // },
    {
      title: "Quiénes Somos",
      url: "/quienes-somos",
    },
    {
      title: "Normatividad",
      url: "/normatividad",
    },
    // {
    //   title: "OTRI",
    //   url: "/otri",
    // },
    {
      title: "FILUN",
      url: "/filun2021",
    },
    {
      title: "Editorial",
      url: "/editorial",
    },
  ];

  return (
    <NavbarList>
      {pages.map((page, i) => (
        <NavbarItem key={i}>
          {page.child ? (
            <NavbarButton title={page.title}>{page.title}</NavbarButton>
          ) : (
            <NavbarLink to={page.url} title={page.title}>
              {page.title}
            </NavbarLink>
          )}
        </NavbarItem>
      ))}
    </NavbarList>
  );
};

export default Navbar;
