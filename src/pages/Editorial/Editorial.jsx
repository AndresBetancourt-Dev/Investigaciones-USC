import Card from "components/Card";
import MenuBar from "components/MenuBar";
import { Colors } from "styles";
import {
  EditorialContainer,
  EditorialText,
  EditorialSection,
  EditorialImage,
  EditorialTitle,
} from "./Editorial.styles";
import SEO from "components/SEO";
import { EditorialHero } from "./Editorial.styles";

const Editorial = () => {
  return (
    <EditorialContainer>
      <SEO
        title="Editorial - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones en esta página muestras las resoluciones y circulares normativas que han sido publicadas."
      />
      <EditorialHero
        src="/images/editorial/Editorial-Home.jpg"
        alt="Editorial Universidad Santiago de Cali"
      />
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
