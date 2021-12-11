import {
  NavbarList,
  NavbarItem,
  NavbarButton,
  NavbarLink,
} from "./Navbar.styles";

const Navbar = () => {
  const pages = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Quiénes Somos",
      url: "/quienes-somos",
    },
    {
      title: "Solicitudes",
      url: "/solicitudes",
    },
    {
      title: "Convocatorias",
      url: "/convocatorias",
    },

    {
      title: "Normatividad",
      url: "/normatividad",
    },
    {
      title: "OTRI",
      url: "/otri",
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
