import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Shadows } from "../styles";

const Bar = styled.section`
  height: ${(props) => props.elementHeight};
  background: ${(props) => props.elementBackground};
  padding: 1em;
  display: flex;
  justify-content: center;
  overflow-x: scroll;

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

const BarItem = styled(Link)`
  color: white;
  width: auto;
  text-decoration: none;
  padding: 2em;
  transition: 0.3s ease;
  font-weight: 800;
  font-size: 1vw;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: ${Shadows.light};
  }

  @media (max-width: 1050px) {
    font-size: 1.5vw;
  }

  @media (max-width: 750px) {
    padding: 0.5em;
    font-size: 2vw;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 3.5vw;
  }
`;

Bar.defaultProps = {
  elementHeight: "auto",
  elementBackground: Colors.blue,
};

const MenuBar = () => {
  const options = [
    {
      title: "Formatos",
    },
    {
      title: "Sistema de Investigación",
    },
    {
      title: "Centros de Investigación",
    },
    {
      title: "Nuestras Redes",
    },
    {
      title: "Nuestras Cifras",
    },
  ];
  return (
    <Bar>
      {options.map((option, i) => (
        <BarItem key={i}>{option.title}</BarItem>
      ))}
    </Bar>
  );
};

export default MenuBar;
