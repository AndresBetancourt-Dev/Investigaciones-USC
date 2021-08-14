import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import Resolution from "../components/Normatividad/Resolution";
import PageLayout from "../components/PageLayout/PageLayout";
import { normatividad } from "../data/normatividad/normatividad";
import { Colors } from "../styles";

const NormatividadContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 2vw;
`;

const NormatividadTitle = styled.h2`
  font-size: 3vw;
  color: ${Colors.blue};
  text-align: center;

  @media (max-width: 500px) {
    font-size: 5vw;
  }
`;

const NormatividadItem = styled.div`
  width: 100%;
  height: auto;
`;

const NormatividadCard = styled(Card)`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 1em;
  }

  @media (max-height: 450px) {
    margin: 3em;
  }
`;

const Normatividad = () => {
  return (
    <PageLayout title={"Normatividad"} image={"/images/common/owl.png"}>
      <NormatividadContainer>
        {normatividad.map((resolution, index) => (
          <NormatividadItem key={index}>
            <NormatividadTitle>{resolution.title}</NormatividadTitle>
            <NormatividadCard
              elementWidth={"80%"}
              rounded
              margin={"auto"}
              boxShadow="light"
              zIndex={"1"}
            >
              {resolution.data.map((resolution, index) => (
                <Resolution
                  key={index}
                  title={resolution.title}
                  description={resolution.description}
                />
              ))}
            </NormatividadCard>
          </NormatividadItem>
        ))}
      </NormatividadContainer>
    </PageLayout>
  );
};

export default Normatividad;
