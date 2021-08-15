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

/* Functional Component */

const SolicitudesContainer = ({ children }) => {
  return <SolicitudesLayout>{children}</SolicitudesLayout>;
};

export default SolicitudesContainer;
