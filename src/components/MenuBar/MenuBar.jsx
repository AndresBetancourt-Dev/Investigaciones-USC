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
        url: "/",
      },
      {
        title: "Eventos",
        url: "/",
      },
      {
        title: "Redes Sociales",
        url: "/",
      },
      {
        title: "Catálogo",
        url: "/",
      },
      {
        title: "Boletines",
        url: "/",
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
