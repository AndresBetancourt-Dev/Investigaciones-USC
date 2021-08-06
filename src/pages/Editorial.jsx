import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider/Slider";
import { SliderEditorial } from "../data/slider/SliderEditorial";
import { Colors, Degrees } from "../styles";
import { Card } from "../components/Card";
import MenuBar from "../components/MenuBar";

const EditorialContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const EditorialSection = styled.section`
  width: ${(props) => props.elementWidth};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.elementBackground};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: ${(props) => props.elementWrap};

  @media (max-width: 500px) {
    flex-wrap: ${(props) => props.mobileWrap};
  }
`;

const EditorialTitle = styled.h2`
  color: ${(props) => props.fontColor};
  text-align: center;
`;

const EditorialText = styled.p`
  color: ${(props) => props.fontColor};
`;

const EditorialImage = styled.img`
  width: 30%;
  height: 30%;
`;

EditorialSection.defaultProps = {
  elementWidth: "100%",
  elementHeight: "100%",
  elementWrap: "wrap",
  elementBackground: "white",
  mobileWrap: "wrap",
  padding: "1em",
};

EditorialTitle.defaultProps = {
  fontColor: Colors.blue,
};

EditorialTitle.defaultProps = {
  fontColor: Colors.blue,
};

const Editorial = () => {
  return (
    <EditorialContainer>
      <Slider
        slides={SliderEditorial}
        height={"87.5vh"}
        sliderOverlay={`linear-gradient(${Degrees.bottomLeft},${Colors.purple.decolored},${Colors.darkBlue.decolored})`}
      ></Slider>
      <MenuBar page="Editorial" />

      <EditorialSection>
        <Card
          boxShadow="light"
          rounded="false"
          elementWidth="95%"
          elementHeight={"auto"}
          margin="none"
        >
          <EditorialTitle>Quiénes Somos</EditorialTitle>
          <EditorialText>
            Los estudiantes, el profesorado y el personal administrativo podrán
            contar con la posibilidad de publicar un libro, una revista o
            cualquier otro tipo de publicación. Los servicios a santiaguinos y
            personas externas a la Institución se especifican en las políticas
            de la Oficina de Publicaciones. Las publicaciones de la Editorial
            universitaria de la USC son una expresión de las actividades de
            investigación, de docencia y también son una afirmación del
            compromiso de preservación y difusión de la cultura, por tanto, la
            Universidad garantiza la calidad del contenido y la presentación de
            todas sus publicaciones, considerando la pertinencia de las líneas
            editoriales correspondientes, la vinculación con el exterior y, el
            acceso de los grupos sociales a la cultura universitaria.
          </EditorialText>
        </Card>
      </EditorialSection>

      <EditorialSection elementBackground={Colors.darkBlue.main}>
        <Card
          boxShadow="none"
          rounded="false"
          elementWidth="50%"
          elementHeight={"auto"}
          margin="none"
          elementBackground={Colors.darkBlue.main}
        >
          <EditorialImage src={"images/editorial/book.png"} />
        </Card>
        <Card
          boxShadow="none"
          rounded="false"
          elementWidth="50%"
          elementHeight={"auto"}
          margin="none"
          elementBackground={Colors.darkBlue.main}
        >
          <EditorialTitle fontColor={"white"}>
            Publicaciones con Contenido Relevante
          </EditorialTitle>
          <EditorialText fontColor={"white"}>
            Se establecieron indicadores y criterios que nos garantizarán los
            contenidos y presentación de los proyectos editoriales,
            considerándose, entre otros componentes, la pertinencia de la obra
            que se estudia para editar, entendida ésta como el requerimiento de
            esa publicación en el país en comparación con otras publicaciones;
            su trascendencia, en la medida que se crea importante su publicación
            para un conjunto de lectores potenciales; su vigencia, innovación o
            demanda en fragmentos de la población.
          </EditorialText>
        </Card>
      </EditorialSection>
    </EditorialContainer>
  );
};

export default Editorial;
