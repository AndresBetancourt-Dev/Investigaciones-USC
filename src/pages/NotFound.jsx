import styled from "styled-components";
import PageLayout from "../components/PageLayout/PageLayout";
import Image from "../assets/images/stock/USC-Fountain.png";
import { Button } from "../components/Button";
import { Colors, Screen } from "../styles";

/* Styled Components */

const NotFoundContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  background: white;
`;

const NotFoundContent = styled.section`
  width: 80%;
  height: auto;
  background: white;
  padding-bottom: 2.5em;
  ${(props) => (props.type === "fragment" ? "height : 50vh;" : null)}
  display : flex;
  align-items: center;
  justify-content: center;

  @media (${Screen.tablet}) {
    flex-direction: column;
  }
`;

const NotFoundImage = styled.img`
  width: 50%;
`;

const NotFoundTitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NotFoundTitle = styled.h3`
  color: ${Colors.blue};
  text-align: center;
  font-size: 3.5vw;
`;

/* Functional Components */

const NotFoundContainer = ({ redirect, message }) => {
  return (
    <NotFoundContentContainer>
      <NotFoundContent>
        <NotFoundImage src={Image} />
        <NotFoundTitleContainer>
          <NotFoundTitle>{message}</NotFoundTitle>
          <Button fontWeight={900} to={`/`}>
            {redirect}
          </Button>
        </NotFoundTitleContainer>
      </NotFoundContent>
    </NotFoundContentContainer>
  );
};

const NotFound = ({ redirect, message, type }) => {
  switch (type) {
    case "fragment":
      return (
        <NotFoundContainer redirect={redirect} message={message} type={type} />
      );
    case "page":
    default:
      return (
        <PageLayout elementHeight="15vh">
          <NotFoundContainer
            redirect={redirect}
            message={message}
            type={type}
          />
        </PageLayout>
      );
  }
};

/* Default Props */

NotFound.defaultProps = {
  type: "page",
  message: "Lo sentimos, la página no ha sido encontrada.",
  redirect: "Home",
};

export default NotFound;
