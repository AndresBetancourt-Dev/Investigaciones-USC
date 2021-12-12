import styled from "styled-components";

export const FlexSolicitudes = styled.section`
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
