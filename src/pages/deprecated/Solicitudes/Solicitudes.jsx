import PageLayout from "components/PageLayout";
import Card from "components/Card";
import { requestsContent, requestsImages } from "data/requests/requests";
import {
  SolicitudesLayout,
  SolicitudesText,
  GridSolicitudes,
  SolicitudesButton,
  SolicitudesIcon,
  SolicitudesTitle,
} from "./Solicitudes.styles";

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

const OldSolicitudes = () => {
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

export default OldSolicitudes;
