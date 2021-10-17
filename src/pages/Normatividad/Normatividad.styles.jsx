import styled from "styled-components";
import { Card } from "../../components/Card";
import { Colors } from "../../styles";

/* Styled Components */

export const NormatividadContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const NormatividadTitle = styled.h2`
  font-size: 3vw;
  color: ${Colors.blue};
  text-align: center;

  @media (max-width: 500px) {
    font-size: 5vw;
  }
`;

export const NormatividadItem = styled.div`
  width: 100%;
  height: auto;
`;

export const NormatividadCard = styled(Card)`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  margin-bottom: 1em;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 1em;
  }

  @media (max-height: 450px) {
    margin: 3em;
  }
`;
