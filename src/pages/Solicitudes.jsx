import styled from "styled-components";
import { Colors } from "../styles";
import { requestsContent, requestsImages } from "../data/requests/requests";
import PageLayout from "../components/PageLayout/PageLayout";
import { Tabs } from "../components/Tabs";

/* Styled Components */

const SolicitudesLayout = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 100%;
`;

const FlexSolicitudes = styled.section`
  background: ${Colors.blue};
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  padding: 1.5vw;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

/* Functional Components */

const SolicitudesContainer = ({ children }) => {
  return <SolicitudesLayout>{children}</SolicitudesLayout>;
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
        <FlexSolicitudes>
          <Tabs sections={sections} />
        </FlexSolicitudes>
      </SolicitudesContainer>
    </PageLayout>
  );
};

export default Solicitudes;
