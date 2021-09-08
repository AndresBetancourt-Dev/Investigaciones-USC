import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../components/Card";
import SolicitudesContainer from "../components/SolicitudesContainer";
import { requestsContent } from "../data/requests/requests";
import { Colors } from "../styles";
import Arrow from "../assets/images/requests/arrow.png";

/* Styled Components */

const SolicitudesButton = styled.button`
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

const SolicitudesBack = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    padding: 0;
    margin: 0;
  }
`;

const SolicitudesList = styled.ul`
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const SolicitudesItem = styled.li`
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

/* Functional Component */

const RequestsList = () => {
  const { section } = useParams();
  const history = useHistory();

  return (
    <SolicitudesContainer>
      <Card boxShadow="none" background={Colors.blue} color={"white"}>
        <SolicitudesButton onClick={(e) => history.goBack()}>
          <SolicitudesBack src={Arrow} alt="Atrás"></SolicitudesBack>
        </SolicitudesButton>
        <SolicitudesList>
          {requestsContent[section].map(({ title, url }) => {
            return (
              <SolicitudesItem key={title}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {title}
                </a>
              </SolicitudesItem>
            );
          })}
        </SolicitudesList>
      </Card>
    </SolicitudesContainer>
  );
};

export default RequestsList;
