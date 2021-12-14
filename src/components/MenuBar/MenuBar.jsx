import { Bar, BarItem } from "./MenuBar.styles";

const MenuBar = ({ page }) => {
  const options = {
    DGI: [
      {
        title: "Formatos",
        url: "/formatos",
      },
      {
        title: "Sistema de Investigación",
        url: "/",
      },
      {
        title: "Centros de Investigación",
        url: "/",
      },
      {
        title: "Nuestras Redes",
        url: "/nuestras-redes",
      },
      {
        title: "Nuestras Cifras",
        url: "/",
      },
    ],
    Editorial: [
      {
        title: "Libros",
        url: "/editorial",
      },
      {
        title: "Eventos",
        url: "/editorial",
      },
      {
        title: "Redes Sociales",
        url: "/editorial",
      },
      {
        title: "Catálogo",
        url: "/editorial",
      },
      {
        title: "Boletines",
        url: "/editorial",
      },
    ],
    OTRI: [
      {
        title: "Quiénes Somos",
        url: "/otri",
      },
      {
        title: "Equipo",
        url: "/otri",
      },
      {
        title: "Laboratorio",
        url: "/otri",
      },
      {
        title: "Portafolio de Servicios de Alta Calidad",
        url: "/otri",
      },
      {
        title: "Otros Portafolios de Áreas",
        url: "/otri",
      },
    ],
  };
  return (
    <Bar>
      {options[page].map((option, i) => (
        <BarItem key={i} to={option.url}>
          {option.title}
        </BarItem>
      ))}
    </Bar>
  );
};

MenuBar.defaultProps = {
  page: "DGI",
};

export default MenuBar;
