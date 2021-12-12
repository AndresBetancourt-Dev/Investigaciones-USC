import styled from "styled-components";
import { Colors } from "styles";

export const SolicitudesButton = styled.button`
  width: 10vw;
  height: 10vw;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.blue};
  cursor: pointer;

  @media (max-width: 500px) {
    width: 15vw;
    height: 15vw;
  }
`;

export const SolicitudesBack = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    padding: 0;
    margin: 0;
  }
`;

export const SolicitudesList = styled.ul`
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const SolicitudesItem = styled.li`
  margin: 2.5px;

  &::marker {
    color: white;
  }

  & a {
    color: white;
    text-decoration: none;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    font-size: 4vw;
  }
`;
