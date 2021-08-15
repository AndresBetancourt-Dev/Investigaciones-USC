import styled from "styled-components";
import { Colors } from "../styles";
import { Link } from "react-router-dom";
import { requestsContent, requestsImages } from "../data/requests/requests";
import PageLayout from "../components/PageLayout/PageLayout";
import { Card } from "../components/Card";

/* Styled Components */

const SolicitudesLayout = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 100%;
`;

const SolicitudesText = styled.div`
  margin: 0;
`;

const GridSolicitudes = styled.section`
  background: ${Colors.blue};
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  padding: 2em;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SolicitudesButton = styled(Link)`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const SolicitudesIcon = styled.img`
  width: 15vw;
  height: 15vw;
`;

const SolicitudesTitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 3vw;
  margin: 0;
  padding: 1em;
  text-decoration: none;
`;

/* Functional Components */

const SolicitudesContainer = ({ children }) => {
  return (
    <SolicitudesLayout>
      <Card boxShadow="light">
        <SolicitudesText>
          Para diligenciar cualquiera de los formularios se requiere que inicie
          primero sesión en su Cuenta de Correo Electrónico Institucional.
          Cumplido lo anterior de clic sobre el formulario que desea
          diligenciar.
        </SolicitudesText>
      </Card>
      {children}
    </SolicitudesLayout>
  );
};

const Solicitudes = () => {
  const sections = [
    {
      image: requestsImages.projects,
      url: "/solicitudes/projects",
      title: "Proyectos",
      content: requestsContent.projects,
    },
    {
      image: requestsImages.knowledgeGeneration,
      url: "/solicitudes/knowledgeGeneration",
      title: "Generación de Conocimiento",
      content: requestsContent.knowledgeGeneration,
    },
    {
      image: requestsImages.calls,
      url: "/solicitudes/calls",
      title: "Convocatorias",
      content: requestsContent.calls,
    },
    {
      image: requestsImages.records,
      url: "/solicitudes/records",
      title: "Constancias",
      content: requestsContent.records,
    },
    {
      image: requestsImages.endorsements,
      url: "/solicitudes/endorsements",
      title: "Avales",
      content: requestsContent.endorsements,
    },
  ];

  return (
    <PageLayout title={"Solicitudes"} image={"/images/common/owl.png"}>
      <SolicitudesContainer>
        <GridSolicitudes>
          {sections.map(({ image, url, title }) => {
            return (
              <SolicitudesButton to={url} key={title}>
                <SolicitudesIcon src={image} alt={title}></SolicitudesIcon>
                <SolicitudesTitle>{title}</SolicitudesTitle>
              </SolicitudesButton>
            );
          })}
        </GridSolicitudes>
      </SolicitudesContainer>
    </PageLayout>
  );
};

export default Solicitudes;
