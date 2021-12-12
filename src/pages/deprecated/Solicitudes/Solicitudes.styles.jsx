import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "styles";

export const SolicitudesLayout = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 100%;
`;

export const SolicitudesText = styled.div`
  margin: 0;
`;

export const GridSolicitudes = styled.section`
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

export const SolicitudesButton = styled(Link)`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const SolicitudesIcon = styled.img`
  width: 15vw;
  height: 15vw;
`;

export const SolicitudesTitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 3vw;
  margin: 0;
  padding: 1em;
  text-decoration: none;
`;
