import styled from "styled-components";
import { Colors, Screen } from "../../styles";

export const Director = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (${Screen.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const DirectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DirectorInformation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
`;

export const DirectorTitle = styled.h2`
  text-align: center;
  font-size: 2vw;

  @media (${Screen.laptop}) {
    font-size: 3.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 5vw;
  }
`;

export const DirectorSubtitle = styled.h4`
  text-align: center;
  font-size: 1.5vw;

  @media (${Screen.laptop}) {
    font-size: 3vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4vw;
  }
`;

export const DirectorContent = styled.div`
  padding: 1em;
  font-size: 90%;
  font-weight: 300;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

export const DirectorSubContent = styled.div`
  padding: 1em;
  font-size: 1em;
  font-weight: 300;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

export const DirectorContact = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }

  & a,
  &:is(*) {
    text-decoration: none;
    color: ${Colors.blue};
    font-weight: 900;
  }
`;
