import React from "react";
import styled from "styled-components";
import SolicitudesContainer from "../components/SolicitudesContainer";
import { Colors } from "../styles/Colors";
import { Link } from "react-router-dom";
import { requestsContent, requestsImages } from "../data/requests/requests";

/* Styled Components */

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

/* Functional Component */

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
  );
};

export default Solicitudes;
