import React from "react";
import { Card } from "../components/Card";
import styled from "styled-components";

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

/* Functional Component */

const SolicitudesContainer = ({ children }) => {
  return (
    <SolicitudesLayout>
      <Card>
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

export default SolicitudesContainer;
