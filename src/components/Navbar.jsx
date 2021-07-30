import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarList = styled.ul`
  list-style: none;
`;

const NavbarItem = styled.li``;

const commonLinkStyles = `
color: white;
font-weight: bold;
text-decoration: none;
font-size: 5vw;
margin : 0;
padding : 0;
letter-spacing : -2.5px;

@media (max-width: 650px) {
  font-size: 7.5vw;
}

@media (max-width: 500px) {
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

const Navbar = () => {
  const pages = [
    {
      title: "Solicitudes",
      url: "/solicitudes",
    },
    {
      title: "Convocatorias",
      url: "/convocatorias",
      child: [],
    },
    {
      title: "Quiénes Somos",
      url: "/historia",
    },
    {
      title: "Normatividad",
      url: "/normatividad",
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
